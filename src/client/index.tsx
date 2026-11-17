/**
 * 中医学习 · 插件入口（浏览器半）
 *
 * 两处注册：
 *   1. sidebar.panellist —— 侧栏导航里的一行（位置就在工作区列表上方，和「插件」同一排）；
 *   2. main(key: 'tcm')  —— 点击后占据会话区的整页学习空间。
 */
import { Component, type ReactNode } from 'react'
import { TcmApp } from './app'
import { installStyles } from './styles'

export const inject = ['slots', 'layout']

/** 面板级错误边界：渲染出错时只坏掉这一页，不牵连整个 GUI。 */
class PanelBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error !== null) {
      return (
        <div className="tcm-root">
          <div className="tcm-wrap">
            <div className="tcm-empty">
              <div className="tcm-empty-icon">误</div>
              <div className="tcm-empty-text">中医学习面板渲染出错</div>
              <div className="tcm-empty-hint" style={{ fontFamily: 'var(--tcm-mono)', fontSize: 11 }}>
                {String(this.state.error?.message ?? this.state.error)}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

/** 侧栏图标（18px 折叠 / 16px 展开，跟随 currentColor）。 */
function TcmIcon(props: { size?: number; active?: boolean }) {
  const size = props.size ?? 16
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.6 3.8h5.6a2.1 2.1 0 0 1 2.1 2.1v10.3H6.7a2.1 2.1 0 0 1-2.1-2.1V3.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12.3 6.2h1.2a1.9 1.9 0 0 1 1.9 1.9v6.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M7.2 7.6h3M7.2 10.4h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
      <rect x="14.1" y="14.4" width="3" height="3" rx="0.6" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

function TcmPanel() {
  return (
    <PanelBoundary>
      <TcmApp />
    </PanelBoundary>
  )
}

/** 注册一个 slot 贡献，并在 fiber 释放时撤销。 */
function contribute(ctx: any, slot: string, register: () => unknown, label: string): void {
  ctx.effect(() => {
    const dispose = ctx.slots.inject(slot, register)
    return () => {
      if (typeof dispose === 'function') dispose()
    }
  }, label)
}

export function apply(ctx: any): void {
  installStyles()

  contribute(ctx, 'sidebar.panellist', () => ctx.slots.register({
    name: 'sidebar.panellist',
    id: 'tcm-learning',
    order: 10,
    label: '中医学习',
  }, TcmIcon), 'tcm-learning: sidebar entry')

  contribute(ctx, 'main', () => ctx.slots.register({
    name: 'main',
    key: 'tcm-learning',
  }, TcmPanel), 'tcm-learning: main panel')
}
