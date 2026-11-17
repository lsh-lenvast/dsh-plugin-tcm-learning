/**
 * 中医学习 · 浏览器半
 *
 * 一个整页学习空间：板块 → 书架 → 阅读；配置页做板块与文档的增删改查。
 * 数据完全来自 /tcm/api（工作区里的 Markdown），不引入任何远端资源。
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import {
  api, ApiError,
  type BookInfo, type ChapterInfo, type DocInfo, type SearchHit, type SectionInfo, type WorkspaceInfo,
} from './api'

marked.setOptions({ gfm: true, breaks: false })

const ROOT_KEY = 'dsh.tcm.root'
const SIZE_KEY = 'dsh.tcm.readSize'
const PALETTE = ['#a8332a', '#4d6b57', '#8a6a2f', '#3f5b7a', '#6b4a7a', '#7a4a3f', '#2f6b6b']

function readStore(key: string, fallback: string): string {
  try { return window.localStorage.getItem(key) ?? fallback } catch { return fallback }
}
function writeStore(key: string, value: string): void {
  try { window.localStorage.setItem(key, value) } catch { /* 隐私模式忽略 */ }
}

/** Markdown → 安全 HTML。 */
function renderMarkdown(markdown: string): string {
  const html = marked.parse(markdown) as string
  return DOMPurify.sanitize(html, { ADD_ATTR: ['target'] })
}

const stripExt = (name: string): string => name.replace(/\.md$/i, '')

function relativeTime(ms: number): string {
  if (!ms) return '—'
  const diff = Date.now() - ms
  const minute = 60_000
  if (diff < minute) return '刚刚'
  if (diff < 60 * minute) return `${Math.floor(diff / minute)} 分钟前`
  if (diff < 24 * 60 * minute) return `${Math.floor(diff / (60 * minute))} 小时前`
  if (diff < 30 * 24 * 60 * minute) return `${Math.floor(diff / (24 * 60 * minute))} 天前`
  return new Date(ms).toLocaleDateString('zh-CN')
}

const colorFor = (section: string, hint?: string | null): string => {
  if (hint) return hint
  let hash = 0
  for (const char of section) hash = (hash * 31 + char.codePointAt(0)!) % 997
  return PALETTE[hash % PALETTE.length]
}

interface Toast { id: number; text: string; kind: 'info' | 'error' }

type View =
  | { kind: 'sections' }
  | { kind: 'shelf'; section: SectionInfo }
  | { kind: 'reader'; section: SectionInfo; rel: string }

type Mode = 'read' | 'config'

/* ───────────────────────────── 根组件 ───────────────────────────── */

export function TcmApp() {
  const [workspaces, setWorkspaces] = useState<WorkspaceInfo[]>([])
  const [root, setRoot] = useState<string>(() => readStore(ROOT_KEY, ''))
  const [booting, setBooting] = useState(true)
  const [sections, setSections] = useState<SectionInfo[]>([])
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>('read')
  const [view, setView] = useState<View>({ kind: 'sections' })
  const [toast, setToast] = useState<Toast | null>(null)
  const [size, setSize] = useState<number>(() => Number(readStore(SIZE_KEY, '17')) || 17)
  const [reloadToken, setReloadToken] = useState(0)

  const notify = useCallback((text: string, kind: 'info' | 'error' = 'info') => {
    const next = { id: Date.now(), text, kind }
    setToast(next)
    window.setTimeout(() => setToast(current => (current?.id === next.id ? null : current)), 2600)
  }, [])

  const loadSections = useCallback(async (target: string) => {
    if (target === '') return
    try {
      const data = await api.bootstrap(target)
      setSections(data.sections)
      setError(null)
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : String(caught))
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const data = await api.workspaces()
        if (cancelled) return
        setWorkspaces(data.workspaces)
        const saved = readStore(ROOT_KEY, '')
        const candidate = [saved, ...data.workspaces.map(item => item.dir)].find(dir => dir !== '')
        if (candidate === undefined) {
          setError('还没有登记任何工作区：请先在 DSH 里添加一个工作区。')
        } else {
          setRoot(candidate)
          writeStore(ROOT_KEY, candidate)
          await loadSections(candidate)
        }
      } catch (caught) {
        if (!cancelled) setError(caught instanceof ApiError ? caught.message : String(caught))
      } finally {
        if (!cancelled) setBooting(false)
      }
    })()
    return () => { cancelled = true }
  }, [loadSections, reloadToken])

  const changeRoot = (next: string) => {
    setRoot(next)
    writeStore(ROOT_KEY, next)
    setView({ kind: 'sections' })
    void loadSections(next)
  }

  const changeSize = (next: number) => {
    const clamped = Math.min(24, Math.max(14, next))
    setSize(clamped)
    writeStore(SIZE_KEY, String(clamped))
  }

  const refresh = useCallback(() => {
    setReloadToken(token => token + 1)
    if (root !== '') void loadSections(root)
  }, [loadSections, root])

  const openSection = (section: SectionInfo) => setView({ kind: 'shelf', section })
  const openDoc = (section: SectionInfo, rel: string) => setView({ kind: 'reader', section, rel })

  return (
    <div className="tcm-root" style={{ '--tcm-read-size': `${size}px` } as any}>
      <TopBar
        mode={mode}
        onMode={setMode}
        workspaces={workspaces}
        root={root}
        onRoot={changeRoot}
        onRefresh={refresh}
        onOpenHit={(hit) => {
          setMode('read')
          const section = sections.find(item => item.id === hit.section)
          if (section !== undefined) setView({ kind: 'reader', section, rel: hit.rel })
        }}
        notify={notify}
      />

      <div className="tcm-body">
        {booting ? (
          <div className="tcm-loading"><span className="tcm-spinner" />正在读取工作区…</div>
        ) : error !== null ? (
          <div className="tcm-wrap">
            <div className="tcm-empty">
              <div className="tcm-empty-icon">卷</div>
              <div className="tcm-empty-text">{error}</div>
              <div className="tcm-empty-hint">插件只读取已登记的工作区目录。确认目录存在后重试，或在右侧顶栏切换数据根。</div>
              <button type="button" className="tcm-btn" onClick={refresh}>重试</button>
            </div>
          </div>
        ) : mode === 'config' ? (
          <ConfigPage
            root={root}
            sections={sections}
            reload={async () => { await loadSections(root) }}
            notify={notify}
          />
        ) : view.kind === 'sections' ? (
          <SectionGrid
            sections={sections}
            onOpen={openSection}
            onAdd={() => {
              void (async () => {
                const name = window.prompt('新板块名称（会创建一个同名文件夹）', '') ?? ''
                if (name.trim() === '') return
                try {
                  await api.createSection(root, name.trim())
                  await loadSections(root)
                  notify(`已创建板块「${name.trim()}」`)
                } catch (caught) {
                  notify(caught instanceof ApiError ? caught.message : String(caught), 'error')
                }
              })()
            }}
          />
        ) : view.kind === 'shelf' ? (
          <Shelf
            root={root}
            section={view.section}
            onBack={() => setView({ kind: 'sections' })}
            onOpenDoc={rel => openDoc(view.section, rel)}
            onAdd={() => setMode('config')}
            notify={notify}
          />
        ) : (
          <Reader
            root={root}
            section={view.section}
            rel={view.rel}
            size={size}
            onSize={changeSize}
            onBack={() => setView({ kind: 'shelf', section: view.section })}
            onOpenDoc={rel => openDoc(view.section, rel)}
            onEdit={() => setMode('config')}
            notify={notify}
          />
        )}
      </div>

      {toast !== null && (
        <div className="tcm-toast" data-kind={toast.kind}>{toast.text}</div>
      )}
    </div>
  )
}

/* ───────────────────────────── 顶栏 ───────────────────────────── */

interface TopBarProps {
  mode: Mode
  onMode: (mode: Mode) => void
  workspaces: WorkspaceInfo[]
  root: string
  onRoot: (root: string) => void
  onRefresh: () => void
  onOpenHit: (hit: SearchHit) => void
  notify: (text: string, kind?: 'info' | 'error') => void
}

function TopBar({ mode, onMode, workspaces, root, onRoot, onRefresh, onOpenHit, notify }: TopBarProps) {
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<SearchHit[] | null>(null)
  const [searching, setSearching] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    window.clearTimeout(timer.current)
    const text = query.trim()
    if (text === '' || root === '') {
      setHits(null)
      return undefined
    }
    timer.current = window.setTimeout(() => {
      setSearching(true)
      api.search(root, text)
        .then(result => setHits(result.hits))
        .catch(error => notify(error instanceof ApiError ? error.message : String(error), 'error'))
        .finally(() => setSearching(false))
    }, 260)
    return () => window.clearTimeout(timer.current)
  }, [query, root, notify])

  return (
    <header className="tcm-top">
      <div className="tcm-brand">
        <span className="tcm-seal">医</span>
        <span className="tcm-brand-text">
          <span className="tcm-brand-title">中医学习</span>
          <span className="tcm-brand-sub">本地书架 · Markdown</span>
        </span>
      </div>

      <nav className="tcm-tabs" aria-label="模式">
        <button type="button" className="tcm-tab" data-active={mode === 'read'} onClick={() => onMode('read')}>预览</button>
        <button type="button" className="tcm-tab" data-active={mode === 'config'} onClick={() => onMode('config')}>配置</button>
      </nav>

      <span className="tcm-top-spacer" />

      <div className="tcm-search">
        <span className="tcm-search-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.4 10.4 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
        <input
          value={query}
          placeholder="搜索书名或正文…"
          onChange={event => setQuery(event.target.value)}
          onKeyDown={event => { if (event.key === 'Escape') { setQuery(''); setHits(null) } }}
          aria-label="搜索"
        />
        {query.trim() !== '' && (
          <div className="tcm-results">
            {searching ? (
              <div className="tcm-loading" style={{ padding: '18px 0' }}><span className="tcm-spinner" />检索中…</div>
            ) : hits === null || hits.length === 0 ? (
              <div className="tcm-loading" style={{ padding: '18px 0' }}>没有匹配的内容</div>
            ) : hits.map(hit => (
              <button
                key={hit.rel}
                type="button"
                className="tcm-result"
                onClick={() => { setHits(null); setQuery(''); onOpenHit(hit) }}
              >
                <div className="tcm-result-title">{hit.title}</div>
                <div className="tcm-result-meta">{hit.section} · {hit.rel}</div>
                <div className="tcm-result-snippet">{hit.snippet}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {workspaces.length > 1 && (
        <select className="tcm-select" value={root} onChange={event => onRoot(event.target.value)} aria-label="数据根">
          {workspaces.map(workspace => (
            <option key={workspace.id} value={workspace.dir}>{workspace.title}</option>
          ))}
        </select>
      )}

      <button type="button" className="tcm-icon-btn" title="重新读取" onClick={onRefresh} aria-label="重新读取">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path d="M13 8a5 5 0 1 1-1.6-3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M13 2.4V5.2h-2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </header>
  )
}

/* ───────────────────────────── 板块 ───────────────────────────── */

function SectionGrid({ sections, onOpen, onAdd }: {
  sections: SectionInfo[]
  onOpen: (section: SectionInfo) => void
  onAdd: () => void
}) {
  return (
    <div className="tcm-wrap">
      <div className="tcm-crumb">
        <span className="tcm-crumb-title">板块</span>
        <span className="tcm-crumb-meta">{sections.length} 个板块</span>
      </div>
      <div className="tcm-sections">
        {sections.map(section => (
          <button
            key={section.id}
            type="button"
            className="tcm-section-card"
            style={{ '--tcm-card-color': colorFor(section.id, section.color) } as any}
            onClick={() => onOpen(section)}
          >
            <div className="tcm-section-name">{section.title}</div>
            <div className="tcm-section-count">
              <span>{section.docs} 篇</span>
              <span className="tcm-section-dot" />
              <span>{relativeTime(section.updatedAt)}</span>
            </div>
            <span className="tcm-section-glyph" aria-hidden="true">{section.title.slice(0, 1)}</span>
          </button>
        ))}
        <button type="button" className="tcm-add-card" onClick={onAdd}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          新增板块
        </button>
      </div>
    </div>
  )
}

/* ───────────────────────────── 书架 ───────────────────────────── */

/** 量一个元素的可用宽度（窗口/侧栏变化时重排书架）。 */
function useMeasuredWidth<T extends HTMLElement>(): [React.RefObject<T | null>, number] {
  const ref = useRef<T | null>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (node === null) return undefined
    const apply = () => setWidth(node.getBoundingClientRect().width)
    apply()
    if (typeof ResizeObserver === 'undefined') return undefined
    const observer = new ResizeObserver(apply)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return [ref, width]
}

function Shelf({ root, section, onBack, onOpenDoc, onAdd, notify }: {
  root: string
  section: SectionInfo
  onBack: () => void
  onOpenDoc: (rel: string) => void
  onAdd: () => void
  notify: (text: string, kind?: 'info' | 'error') => void
}) {
  const [books, setBooks] = useState<BookInfo[] | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [areaRef, areaWidth] = useMeasuredWidth<HTMLDivElement>()

  useEffect(() => {
    let cancelled = false
    setBooks(null)
    api.section(root, section.id)
      .then(result => { if (!cancelled) setBooks(result.books) })
      .catch(error => {
        if (cancelled) return
        setBooks([])
        notify(error instanceof ApiError ? error.message : String(error), 'error')
      })
    return () => { cancelled = true }
  }, [root, section.id, notify])

  // 一层放几本由可用宽度决定：扣掉两侧内边距，再留一点悬停放大的余量。
  const cols = useMemo(() => {
    const usable = areaWidth - SHELF_PADDING * 2 - 34
    if (usable <= 0) return 6
    return Math.max(3, Math.min(28, Math.floor((usable + SPINE_GAP) / (SPINE_W + SPINE_GAP))))
  }, [areaWidth])

  const rows = useMemo(() => {
    const list = books ?? []
    const output: BookInfo[][] = []
    for (let index = 0; index < list.length; index += cols) output.push(list.slice(index, index + cols))
    return output
  }, [books, cols])

  const accent = colorFor(section.id, section.color)

  return (
    <div className="tcm-wrap">
      <div className="tcm-crumb">
        <button type="button" className="tcm-icon-btn" onClick={onBack} aria-label="返回板块">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.8 3.6 5.4 8l4.4 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="tcm-crumb-title">{section.title}</span>
        <span className="tcm-crumb-meta">{books === null ? '读取中…' : `共 ${books.length} 卷`}</span>
        <span className="tcm-crumb-spacer" />
        <button type="button" className="tcm-btn tcm-btn-sm" onClick={onAdd}>新建内容</button>
      </div>

      <div className="tcm-shelf-area" ref={areaRef}>
        {books === null ? (
          <div className="tcm-loading"><span className="tcm-spinner" />正在翻书架…</div>
        ) : books.length === 0 ? (
          <div className="tcm-empty">
            <div className="tcm-empty-icon">架</div>
            <div className="tcm-empty-text">这个板块还空着</div>
            <div className="tcm-empty-hint">
              去「配置」里新建一篇 Markdown，或者直接把 .md 文件放进
              <br />
              <code>{(root + '\\' + section.id).replace(/\\\\/g, '\\')}</code>
            </div>
            <button type="button" className="tcm-btn tcm-btn-primary" onClick={onAdd}>去配置</button>
          </div>
        ) : (
          rows.map((row, rowIndex) => (
            <ShelfRow
              key={rowIndex}
              books={row}
              accent={accent}
              expanded={expanded}
              onOpenDoc={onOpenDoc}
              onToggleSeries={rel => setExpanded(current => (current === rel ? null : rel))}
            />
          ))
        )}
      </div>
    </div>
  )
}

/* 书架几何：书脊基础宽度、间距、层板左右内边距。 */
const SPINE_W = 54
const SPINE_GAP = 4
const SHELF_PADDING = 16

/** 书脊纸色：按书名散列，同一本书始终同色。 */
const PAPERS = ['#efe2c6', '#e9dcc0', '#f1e7cf', '#e5d6b6', '#ece0c4', '#e7dbc6']
const paperFor = (name: string): string => {
  let hash = 0
  for (const char of name) hash = (hash * 31 + char.codePointAt(0)!) % 997
  return PAPERS[hash % PAPERS.length]
}

/** 书脊高度：所有书统一高度（等高才好对齐），套书也不再拔高。 */
const SPINE_H = 236

/** 书名越长，字号越小；太长就交给书脊自身的裁切 + 悬停小签。 */
function titleSize(title: string): number {
  const length = title.length
  if (length > 14) return 12
  if (length > 9) return 13
  if (length > 6) return 14
  return 15
}

/** 一层书架：悬停时按距离做 Dock 式放大。
 *
 * 关键：**只动 transform，不动 width/height**。布局尺寸固定，每本书的
 * 「变宽 + 长高」由 scale 完成，邻居被"推开"的位置差由 translateX 补偿，
 * 因此整段动画只走合成层，没有重排/重绘。书脊里的文字用反向 scale 抵消，
 * 保持原字号、不跟着拉伸。 */
function ShelfRow({ books, accent, expanded, onOpenDoc, onToggleSeries }: {
  books: BookInfo[]
  accent: string
  expanded: string | null
  onOpenDoc: (rel: string) => void
  onToggleSeries: (rel: string) => void
}) {
  const [hover, setHover] = useState<number | null>(null)
  const heights = useMemo(() => books.map(() => SPINE_H), [books])
  const maxHeight = SPINE_H
  const rowHeight = maxHeight + 60
  const series = books.find(book => book.rel === expanded)

  // 每本书的缩放系数，以及为了让邻居"被推开"所需的水平位移。
  const placed = useMemo(() => {
    let cursor = 0
    return books.map((book, index) => {
      // 高斯衰减：越靠近指针的书放得越大，隔一本只涨一点，再远归零。
      const factor = hover === null ? 0 : Math.exp(-((index - hover) ** 2) / 1.6)
      const sx = 1 + 0.55 * factor
      const sy = 1 + 0.1 * factor
      const visualWidth = SPINE_W * sx
      const dx = cursor - index * (SPINE_W + SPINE_GAP) - (SPINE_W - visualWidth) / 2
      cursor += visualWidth + SPINE_GAP
      return { book, index, factor, sx, sy, dx, height: heights[index] }
    })
  }, [books, heights, hover])

  return (
    <div className="tcm-shelf-block" onMouseLeave={() => setHover(null)}>
      <div
        className="tcm-shelf-row"
        style={{ height: rowHeight, '--spine-w': `${SPINE_W}px` } as any}
      >
        {placed.map(item => (
          <Spine
            key={item.book.rel}
            book={item.book}
            accent={accent}
            sx={item.sx}
            sy={item.sy}
            dx={item.dx}
            height={item.height}
            open={hover === item.index}
            onHover={() => setHover(item.index)}
            onOpen={() => {
              if (item.book.kind === 'dir') onToggleSeries(item.book.rel)
              else onOpenDoc(item.book.rel)
            }}
          />
        ))}
      </div>
      <div className="tcm-shelf-board" />
      {series !== undefined && (
        <ChapterStrip book={series} onOpenDoc={onOpenDoc} onCollapse={() => onToggleSeries(series.rel)} />
      )}
    </div>
  )
}

/** 一本站着的书：只看得见书脊。 */
function Spine({ book, accent, sx, sy, dx, height, open, onHover, onOpen }: {
  book: BookInfo
  accent: string
  sx: number
  sy: number
  dx: number
  height: number
  open: boolean
  onHover: () => void
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      className="tcm-spine"
      data-open={open ? 'true' : 'false'}
      data-series={book.kind === 'dir' ? 'true' : 'false'}
      style={{
        width: SPINE_W,
        height,
        transform: `translate3d(${dx.toFixed(2)}px, 0, 0) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`,
        '--tcm-book-accent': accent,
        '--tcm-book-bg': paperFor(book.title),
        '--spine-title-size': `${titleSize(book.title)}px`,
      } as any}
      aria-label={book.title}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onOpen}
    >
      <span
        className="tcm-spine-inner"
        style={{
          height,
          transform: `scale(${(1 / sx).toFixed(4)}, ${(1 / sy).toFixed(4)})`,
          '--tcm-tip-rise': `${(height * (sy - 1)).toFixed(1)}px`,
        } as any}
      >
        <span className="tcm-spine-title">{book.title}</span>
        <span className="tcm-spine-foot">
          {book.kind === 'dir' ? `${book.chapters?.length ?? 0} 卷` : `${book.words} 字`}
        </span>
        <span className="tcm-spine-tip" aria-hidden="true">
          <strong>{book.title}</strong>
          <em>{book.kind === 'dir' ? `${book.chapters?.length ?? 0} 卷 · ${book.words} 字` : `${book.words} 字`}</em>
        </span>
      </span>
    </button>
  )
}

function ChapterStrip({ book, onOpenDoc, onCollapse }: {
  book: BookInfo
  onOpenDoc: (rel: string) => void
  onCollapse: () => void
}) {
  return (
    <div className="tcm-panel" style={{ marginBottom: 26 }}>
      <div className="tcm-panel-head">
        <span>{book.title}</span>
        <span className="tcm-crumb-meta">{book.chapters?.length ?? 0} 卷</span>
        <span className="tcm-crumb-spacer" />
        <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={onCollapse}>收起</button>
      </div>
      <div className="tcm-panel-body">
        <div className="tcm-doc-list">
          {(book.chapters ?? []).map((chapter: ChapterInfo) => (
            <button key={chapter.rel} type="button" className="tcm-row" onClick={() => onOpenDoc(chapter.rel)}>
              <span className="tcm-row-title">{stripExt(chapter.title)}</span>
              <span className="tcm-row-meta">{chapter.words} 字</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────────── 阅读器 ───────────────────────────── */

function Reader({ root, section, rel, size, onSize, onBack, onOpenDoc, onEdit, notify }: {
  root: string
  section: SectionInfo
  rel: string
  size: number
  onSize: (next: number) => void
  onBack: () => void
  onOpenDoc: (rel: string) => void
  onEdit: () => void
  notify: (text: string, kind?: 'info' | 'error') => void
}) {
  const [doc, setDoc] = useState<DocInfo | null>(null)
  const [books, setBooks] = useState<BookInfo[]>([])
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([])
  const [progress, setProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState('')
  const articleRef = useRef<HTMLDivElement | null>(null)
  const html = useMemo(() => (doc === null ? '' : renderMarkdown(doc.content)), [doc])

  useEffect(() => {
    let cancelled = false
    setDoc(null)
    api.doc(root, rel)
      .then(result => { if (!cancelled) setDoc(result) })
      .catch(error => {
        if (cancelled) return
        notify(error instanceof ApiError ? error.message : String(error), 'error')
      })
    api.section(root, section.id)
      .then(result => { if (!cancelled) setBooks(result.books) })
      .catch(() => { /* 翻页条只是锦上添花 */ })
    return () => { cancelled = true }
  }, [root, rel, section.id, notify])

  // 标题锚点：渲染后给 h2/h3 编号，并据此生成目录。
  useEffect(() => {
    const article = articleRef.current
    if (article === null || doc === null) return
    const headings = Array.from(article.querySelectorAll<HTMLElement>('.tcm-prose h2, .tcm-prose h3'))
    setToc(headings.map((heading, index) => {
      const id = `tcm-h-${index}`
      heading.id = id
      return { id, text: heading.textContent ?? '', level: heading.tagName === 'H2' ? 2 : 3 }
    }))
  }, [html, doc])

  // 阅读进度 + 目录高亮。
  useEffect(() => {
    const article = articleRef.current
    const body = article?.closest('.tcm-body') as HTMLElement | null | undefined
    if (article === null || article === undefined || body === null || body === undefined) return undefined
    const headings = () => Array.from(article.querySelectorAll<HTMLElement>('.tcm-prose h2, .tcm-prose h3'))
    const onScroll = () => {
      const top = body.scrollTop
      const total = body.scrollHeight - body.clientHeight
      setProgress(total <= 0 ? 0 : Math.min(1, Math.max(0, top / total)))
      let current = ''
      for (const heading of headings()) {
        if (heading.getBoundingClientRect().top <= 120) current = heading.id
      }
      setActiveHeading(current)
    }
    onScroll()
    body.addEventListener('scroll', onScroll, { passive: true })
    return () => body.removeEventListener('scroll', onScroll)
  }, [html])

  const flat = useMemo(() => {
    const list: { rel: string; title: string }[] = []
    for (const book of books) {
      if (book.kind === 'file') list.push({ rel: book.rel, title: book.title })
      else for (const chapter of book.chapters ?? []) list.push({ rel: chapter.rel, title: stripExt(chapter.title) })
    }
    return list
  }, [books])

  const index = flat.findIndex(item => item.rel === rel)
  const previous = index > 0 ? flat[index - 1] : undefined
  const next = index >= 0 && index < flat.length - 1 ? flat[index + 1] : undefined

  return (
    <>
      <div className="tcm-reader-bar">
        <button type="button" className="tcm-icon-btn" onClick={onBack} aria-label="返回书架">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.8 3.6 5.4 8l4.4 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="tcm-reader-title">{doc?.title ?? '读取中…'}</span>
        <span className="tcm-crumb-meta">{section.title}</span>
        <span className="tcm-crumb-spacer" />
        <button type="button" className="tcm-icon-btn" title="减小字号" onClick={() => onSize(size - 1)} aria-label="减小字号">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 11 6 5l3 6M4 9h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M11 8h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </button>
        <span className="tcm-crumb-meta" style={{ minWidth: 26, textAlign: 'center' }}>{size}</span>
        <button type="button" className="tcm-icon-btn" title="增大字号" onClick={() => onSize(size + 1)} aria-label="增大字号">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 11 5 5l3 6M3 9h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M10.5 8h3M12 6.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </button>
        <button type="button" className="tcm-btn tcm-btn-sm" onClick={onEdit}>编辑</button>
        <div className="tcm-reader-progress" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      {doc === null ? (
        <div className="tcm-loading"><span className="tcm-spinner" />正在研墨…</div>
      ) : (
        <div className="tcm-reader-layout">
          <article className="tcm-article" ref={articleRef}>
            <h1 className="tcm-doc-title">{doc.title}</h1>
            <div className="tcm-doc-rule">{(doc.meta.tags ?? section.title).split(',').filter(Boolean).join(' · ') || section.title}</div>
            <div className="tcm-prose" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="tcm-pager">
              {previous !== undefined ? (
                <button type="button" className="tcm-pager-item" onClick={() => onOpenDoc(previous.rel)}>
                  <div className="tcm-pager-kicker">上一卷</div>
                  <div className="tcm-pager-title">{previous.title}</div>
                </button>
              ) : <span style={{ flex: 1 }} />}
              {next !== undefined ? (
                <button type="button" className="tcm-pager-item" data-dir="next" onClick={() => onOpenDoc(next.rel)}>
                  <div className="tcm-pager-kicker">下一卷</div>
                  <div className="tcm-pager-title">{next.title}</div>
                </button>
              ) : <span style={{ flex: 1 }} />}
            </div>
          </article>

          {toc.length > 1 && (
            <aside className="tcm-toc">
              <div className="tcm-toc-label">目 录</div>
              {toc.map(item => (
                <button
                  key={item.id}
                  type="button"
                  className="tcm-toc-link"
                  data-level={item.level}
                  data-active={activeHeading === item.id}
                  onClick={() => {
                    const target = articleRef.current?.querySelector<HTMLElement>(`#${item.id}`)
                    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                >
                  {item.text}
                </button>
              ))}
            </aside>
          )}
        </div>
      )}
    </>
  )
}

/* ───────────────────────────── 配置 ───────────────────────────── */

function ConfigPage({ root, sections, reload, notify }: {
  root: string
  sections: SectionInfo[]
  reload: () => Promise<void>
  notify: (text: string, kind?: 'info' | 'error') => void
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const [books, setBooks] = useState<BookInfo[] | null>(null)
  const [editing, setEditing] = useState<null | { rel: string; title: string; content: string; mtime: number; isNew: boolean }>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (sections.length === 0) return
    if (!sections.some(section => section.id === activeId)) setActiveId(sections[0].id)
  }, [sections, activeId])

  const loadBooks = useCallback(async (sectionId: string) => {
    if (sectionId === '') return
    setBooks(null)
    try {
      const result = await api.section(root, sectionId)
      setBooks(result.books)
    } catch (error) {
      setBooks([])
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }, [root, notify])

  useEffect(() => { void loadBooks(activeId) }, [activeId, loadBooks])

  const openEditor = async (rel: string) => {
    try {
      const doc = await api.doc(root, rel)
      setEditing({ rel, title: doc.title, content: doc.raw, mtime: doc.mtime, isNew: false })
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const createDoc = async (kind: 'file' | 'dir') => {
    const title = window.prompt(kind === 'dir' ? '新套书名称' : '新文档标题', '') ?? ''
    if (title.trim() === '') return
    try {
      const created = await api.createDoc(root, activeId, title.trim(), kind)
      await Promise.all([loadBooks(activeId), reload()])
      await openEditor(created.rel)
      notify('已创建')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const renameDoc = async (rel: string, current: string) => {
    const next = window.prompt('改名', stripExt(current)) ?? ''
    if (next.trim() === '' || next.trim() === stripExt(current)) return
    try {
      await api.renameDoc(root, rel, next.trim())
      await loadBooks(activeId)
      notify('已改名')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const removeDoc = async (rel: string) => {
    if (!window.confirm(`删除「${rel}」？\n（会移入 .tcm/trash，可手动找回）`)) return
    try {
      await api.deleteDoc(root, rel)
      await Promise.all([loadBooks(activeId), reload()])
      notify('已移入回收站')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const addSection = async () => {
    const name = window.prompt('新板块名称（同名文件夹）', '') ?? ''
    if (name.trim() === '') return
    try {
      await api.createSection(root, name.trim())
      await reload()
      notify('已创建板块')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const renameSection = async (id: string) => {
    const next = window.prompt('板块改名（会重命名文件夹）', id) ?? ''
    if (next.trim() === '' || next.trim() === id) return
    try {
      await api.renameSection(root, id, next.trim())
      await reload()
      setActiveId(next.trim())
      notify('已改名')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const removeSection = async (id: string) => {
    if (!window.confirm(`删除板块「${id}」及其全部内容？\n（整夹移入 .tcm/trash，可手动找回）`)) return
    try {
      await api.deleteSection(root, id)
      await reload()
      notify('板块已移入回收站')
    } catch (error) {
      notify(error instanceof ApiError ? error.message : String(error), 'error')
    }
  }

  const save = async () => {
    if (editing === null) return
    setBusy(true)
    try {
      const result = await api.saveDoc(root, editing.rel, editing.content, editing.isNew ? undefined : editing.mtime)
      setEditing({ ...editing, mtime: result.mtime, isNew: false })
      await Promise.all([loadBooks(activeId), reload()])
      notify('已保存')
    } catch (error) {
      if (error instanceof ApiError && error.code === 'CONFLICT') {
        notify('文件已被别处修改，请重新打开后再保存', 'error')
      } else {
        notify(error instanceof ApiError ? error.message : String(error), 'error')
      }
    } finally {
      setBusy(false)
    }
  }

  const section = sections.find(item => item.id === activeId)

  return (
    <div className="tcm-wrap">
      <div className="tcm-crumb">
        <span className="tcm-crumb-title">配置</span>
        <span className="tcm-crumb-meta">板块 = 工作区里的一个文件夹，文件夹名即板块名</span>
        <span className="tcm-crumb-spacer" />
        <span className="tcm-crumb-meta" style={{ fontFamily: 'var(--tcm-mono)', fontSize: 11 }}>{root}</span>
      </div>

      <div className="tcm-config">
        <section className="tcm-panel">
          <div className="tcm-panel-head">
            <span>板块</span>
            <span className="tcm-crumb-spacer" />
            <button type="button" className="tcm-btn tcm-btn-sm" onClick={() => void addSection()}>新增</button>
          </div>
          <div className="tcm-panel-body">
            {sections.length === 0 && <div className="tcm-panel-note">还没有板块。新建一个会在工作区里创建同名文件夹。</div>}
            {sections.map(item => (
              <div key={item.id} className="tcm-row" data-active={item.id === activeId} data-hidden={item.hidden} onClick={() => { setActiveId(item.id); setEditing(null) }}>
                <span className="tcm-row-dot" style={{ background: colorFor(item.id, item.color) }} />
                <span className="tcm-row-title">{item.title}</span>
                <span className="tcm-row-meta">{item.docs}</span>
                <button
                  type="button"
                  className="tcm-icon-btn"
                  title="改名"
                  onClick={event => { event.stopPropagation(); void renameSection(item.id) }}
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 13h2.2l7.1-7.1-2.2-2.2L3 10.8V13Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="m10.6 4.2 1.2-1.2 2.2 2.2-1.2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
                </button>
                <button
                  type="button"
                  className="tcm-icon-btn"
                  title="删除"
                  onClick={event => { event.stopPropagation(); void removeSection(item.id) }}
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M4 5h8M6.5 5V3.6h3V5M5.2 5l.6 8h4.4l.6-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            ))}
          </div>
          <div className="tcm-panel-note">
            阅读状态、阅读进度只存在本机浏览器；内容全部是工作区里的 .md 文件，可以直接用任何编辑器改。
          </div>
        </section>

        <section className="tcm-panel">
          {editing !== null ? (
            <>
              <div className="tcm-panel-head">
                <button type="button" className="tcm-icon-btn" onClick={() => setEditing(null)} aria-label="返回">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M9.8 3.6 5.4 8l4.4 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <span style={{ fontFamily: 'var(--tcm-mono)', fontSize: 12 }}>{editing.rel}</span>
                <span className="tcm-crumb-spacer" />
                <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-primary" disabled={busy} onClick={() => void save()}>
                  {busy ? '保存中…' : '保存'}
                </button>
              </div>
              <div className="tcm-panel-body" style={{ background: 'var(--tcm-paper)' }}>
                <div className="tcm-editor">
                  <div className="tcm-editor-pane">
                    <textarea
                      className="tcm-textarea"
                      value={editing.content}
                      spellCheck={false}
                      onChange={event => setEditing({ ...editing, content: event.target.value })}
                      onKeyDown={event => {
                        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
                          event.preventDefault()
                          void save()
                        }
                      }}
                      placeholder="# 标题"
                    />
                  </div>
                  <div className="tcm-editor-pane">
                    <div className="tcm-editor-preview">
                      <div className="tcm-prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(editing.content) }} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="tcm-panel-head">
                <span>{section?.title ?? '文档'}</span>
                <span className="tcm-crumb-meta">{books === null ? '读取中…' : `${books.length} 卷`}</span>
                <span className="tcm-crumb-spacer" />
                <button type="button" className="tcm-btn tcm-btn-sm" onClick={() => void createDoc('file')} disabled={activeId === ''}>新建文档</button>
                <button type="button" className="tcm-btn tcm-btn-sm" onClick={() => void createDoc('dir')} disabled={activeId === ''}>新建套书</button>
              </div>
              <div className="tcm-panel-body">
                {books === null ? (
                  <div className="tcm-loading"><span className="tcm-spinner" />读取中…</div>
                ) : books.length === 0 ? (
                  <div className="tcm-empty" style={{ padding: '46px 16px' }}>
                    <div className="tcm-empty-icon">空</div>
                    <div className="tcm-empty-text">这个板块还没有内容</div>
                  </div>
                ) : (
                  <div className="tcm-doc-list">
                    {books.map(book => (
                      <div key={book.rel}>
                        <div className="tcm-row">
                          <span className="tcm-row-title" onClick={() => void openEditor(book.kind === 'file' ? book.rel : book.chapters?.[0]?.rel ?? book.rel)} style={{ cursor: 'pointer' }}>
                            {book.kind === 'dir' ? '📚 ' : ''}{book.title}
                          </span>
                          <span className="tcm-row-meta">{book.words} 字</span>
                          <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={() => void openEditor(book.kind === 'file' ? book.rel : book.chapters?.[0]?.rel ?? book.rel)}>编辑</button>
                          <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={() => void renameDoc(book.rel, book.name)}>改名</button>
                          <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={() => void removeDoc(book.rel)}>删除</button>
                        </div>
                        {book.kind === 'dir' && (
                          <div style={{ paddingLeft: 20 }}>
                            {(book.chapters ?? []).map(chapter => (
                              <div key={chapter.rel} className="tcm-row">
                                <span className="tcm-row-title" onClick={() => void openEditor(chapter.rel)} style={{ cursor: 'pointer', opacity: .9 }}>
                                  {stripExt(chapter.title)}
                                </span>
                                <span className="tcm-row-meta">{chapter.words} 字</span>
                                <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={() => void openEditor(chapter.rel)}>编辑</button>
                                <button type="button" className="tcm-btn tcm-btn-sm tcm-btn-ghost" onClick={() => void removeDoc(chapter.rel)}>删除</button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="tcm-panel-note">
                支持 Markdown 全文（标题、引用、表格、代码块）。保存时用 Ctrl/⌘ + S 也可以。
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}
