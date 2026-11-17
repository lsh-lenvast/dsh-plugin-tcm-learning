/** Host API 客户端：所有请求都相对页面自身解析，兼容桌面壳与反代前缀。 */

const BASE = 'tcm/api'

export interface WorkspaceInfo { id: string; title: string; dir: string }
export interface SectionInfo {
  id: string; title: string; color: string | null; order: number
  hidden: boolean; docs: number; updatedAt: number
}
export interface ChapterInfo { name: string; rel: string; title: string; words: number; mtime: number }
export interface BookInfo {
  kind: 'file' | 'dir'; name: string; rel: string; title: string
  summary: string; words: number; mtime: number; chapters?: ChapterInfo[]
}
export interface DocInfo {
  rel: string; title: string; meta: Record<string, string>
  content: string; raw: string; words: number; mtime: number
}
export interface SearchHit { rel: string; section: string; title: string; snippet: string }

export class ApiError extends Error {
  code: string
  status: number
  constructor(message: string, code: string, status: number) {
    super(message)
    this.code = code
    this.status = status
  }
}

function endpoint(route: string, params?: Record<string, string | number | undefined>): string {
  const url = new URL(`${BASE}${route}`, document.baseURI)
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value === undefined || value === null || value === '') continue
    url.searchParams.set(key, String(value))
  }
  return url.href
}

async function request<T>(route: string, init: RequestInit & { params?: Record<string, string | number | undefined> } = {}): Promise<T> {
  const { params, ...rest } = init
  let response: Response
  try {
    response = await fetch(endpoint(route, params), {
      ...rest,
      headers: { 'content-type': 'application/json', ...(rest.headers ?? {}) },
    })
  } catch (error: any) {
    throw new ApiError(`无法连接宿主：${error?.message ?? error}`, 'NETWORK', 0)
  }
  let payload: any = null
  try {
    payload = await response.json()
  } catch {
    payload = null
  }
  if (!response.ok || payload?.ok !== true) {
    const message = payload?.message ?? `请求失败（HTTP ${response.status}）`
    throw new ApiError(message, payload?.code ?? 'HTTP_ERROR', response.status)
  }
  return payload.data as T
}

export const api = {
  workspaces: () => request<{ workspaces: WorkspaceInfo[]; cwd: string }>('/workspaces'),
  bootstrap: (root: string) => request<{ root: string; workspace: string; sections: SectionInfo[]; allSections: SectionInfo[] }>('/bootstrap', { params: { root } }),
  section: (root: string, section: string) => request<{ section: { id: string; title: string; color: string | null }; books: BookInfo[] }>('/section', { params: { root, section } }),
  doc: (root: string, rel: string) => request<DocInfo>('/doc', { params: { root, path: rel } }),
  saveDoc: (root: string, rel: string, content: string, mtime?: number) =>
    request<{ rel: string; mtime: number }>('/doc', { method: 'PUT', params: { root }, body: JSON.stringify({ root, path: rel, content, mtime }) }),
  createDoc: (root: string, section: string, title: string, kind: 'file' | 'dir') =>
    request<{ rel: string; kind: string }>('/doc', { method: 'POST', body: JSON.stringify({ root, section, title, kind }) }),
  renameDoc: (root: string, rel: string, title: string) =>
    request<{ rel: string }>('/doc', { method: 'PATCH', body: JSON.stringify({ root, path: rel, title }) }),
  deleteDoc: (root: string, rel: string) =>
    request<{ trashed: string }>('/doc', { method: 'DELETE', params: { root, path: rel } }),
  createSection: (root: string, name: string) =>
    request<{ section: SectionInfo }>('/section', { method: 'POST', body: JSON.stringify({ root, name }) }),
  renameSection: (root: string, from: string, to: string) =>
    request<{ section: { id: string; title: string } }>('/section', { method: 'PATCH', body: JSON.stringify({ root, from, to }) }),
  deleteSection: (root: string, name: string) =>
    request<{ trashed: string }>('/section', { method: 'DELETE', params: { root, name } }),
  config: (root: string) => request<{ config: any; sections: SectionInfo[] }>('/config', { params: { root } }),
  saveConfig: (root: string, sections: Record<string, any>) =>
    request<{ config: any }>('/config', { method: 'PUT', body: JSON.stringify({ root, sections }) }),
  search: (root: string, q: string) => request<{ query: string; hits: SearchHit[] }>('/search', { params: { root, q } }),
}
