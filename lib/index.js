// src/host/index.ts
import { promises as fs } from "node:fs";
import * as path from "node:path";
var PREFIX = "/tcm/api";
var CONFIG_REL = path.join(".tcm", "config.json");
var TRASH_REL = path.join(".tcm", "trash");
var MAX_BODY = 8 * 1024 * 1024;
var MD = /\.md$/i;
var inject = ["webServer"];
function send(res, status, body) {
  const text = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "content-length": Buffer.byteLength(text)
  });
  res.end(text);
}
var ok = (res, data) => send(res, 200, { ok: true, data });
var fail = (res, status, code, message) => send(res, status, { ok: false, code, message });
async function readJson(req) {
  const chunks = [];
  let total = 0;
  for await (const chunk of req) {
    total += chunk.length;
    if (total > MAX_BODY) throw Object.assign(new Error("\u8BF7\u6C42\u4F53\u8FC7\u5927"), { status: 413 });
    chunks.push(chunk);
  }
  if (total === 0) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw Object.assign(new Error("\u8BF7\u6C42\u4F53\u4E0D\u662F\u5408\u6CD5 JSON"), { status: 400 });
  }
}
var norm = (p) => process.platform === "win32" ? p.toLowerCase() : p;
function inside(root, target) {
  const r = norm(path.resolve(root));
  const t = norm(path.resolve(target));
  return t === r || t.startsWith(r.endsWith(path.sep) ? r : r + path.sep);
}
async function workspaceDirs(ctx) {
  const registry = ctx.get("workspaceRegistry");
  if (registry === void 0 || registry === null) return [];
  let list = [];
  try {
    const raw = registry.list?.() ?? registry.workspaces?.() ?? [];
    list = Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
  const out = [];
  for (const item of list) {
    if (item === null || item === void 0) continue;
    const candidates = [
      item.path,
      item.dir,
      item.directory,
      item.cwd,
      item.root,
      item.record?.path,
      item.record?.dir,
      item.record?.directory,
      item.snapshot?.path,
      item.snapshot?.dir,
      typeof item === "string" ? item : void 0
    ];
    const dir = candidates.find((value) => typeof value === "string" && value.length > 0);
    if (dir === void 0) continue;
    out.push({
      id: String(item.id ?? item.workspaceId ?? dir),
      title: String(item.title ?? item.displayTitle ?? item.name ?? path.basename(dir)),
      dir
    });
  }
  return out;
}
async function resolveRoot(ctx, requested) {
  if (typeof requested !== "string" || requested.trim() === "") {
    throw Object.assign(new Error("\u7F3A\u5C11 root \u53C2\u6570"), { status: 400 });
  }
  const resolved = path.resolve(requested.trim());
  let real;
  try {
    real = await fs.realpath(resolved);
  } catch {
    throw Object.assign(new Error(`\u76EE\u5F55\u4E0D\u5B58\u5728\uFF1A${resolved}`), { status: 404 });
  }
  const stat = await fs.stat(real);
  if (!stat.isDirectory()) throw Object.assign(new Error(`\u4E0D\u662F\u76EE\u5F55\uFF1A${real}`), { status: 400 });
  const trusted = /* @__PURE__ */ new Set([norm(await fs.realpath(process.cwd()))]);
  for (const workspace of await workspaceDirs(ctx)) {
    try {
      trusted.add(norm(await fs.realpath(workspace.dir)));
    } catch {
    }
  }
  if (!trusted.has(norm(real))) {
    throw Object.assign(new Error(`\u8BE5\u76EE\u5F55\u4E0D\u662F\u5DF2\u767B\u8BB0\u7684\u5DE5\u4F5C\u533A\uFF1A${real}`), { status: 403 });
  }
  return real;
}
function safePath(root, rel, options = {}) {
  if (typeof rel !== "string") throw Object.assign(new Error("\u7F3A\u5C11\u8DEF\u5F84\u53C2\u6570"), { status: 400 });
  const cleaned = rel.replace(/\\/g, "/").replace(/^\/+/, "");
  if (cleaned.split("/").some((segment) => segment === "..")) {
    throw Object.assign(new Error("\u8DEF\u5F84\u4E0D\u5408\u6CD5"), { status: 400 });
  }
  const target = path.resolve(root, cleaned);
  if (!inside(root, target)) throw Object.assign(new Error("\u8DEF\u5F84\u8D8A\u754C"), { status: 400 });
  if (!options.allowRoot && norm(target) === norm(root)) {
    throw Object.assign(new Error("\u8DEF\u5F84\u4E0D\u80FD\u662F\u6839\u76EE\u5F55\u672C\u8EAB"), { status: 400 });
  }
  return target;
}
function parseFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (match === null) return { meta: {}, body: text };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const hit = /^([A-Za-z_][\w-]*)\s*:\s*(.*)$/.exec(line.trim());
    if (hit === null) continue;
    meta[hit[1]] = hit[2].replace(/^['"]|['"]$/g, "");
  }
  return { meta, body: text.slice(match[0].length) };
}
async function head(file, bytes = 800) {
  let handle2;
  try {
    handle2 = await fs.open(file, "r");
    const buffer = Buffer.alloc(bytes);
    const { bytesRead } = await handle2.read(buffer, 0, bytes, 0);
    return buffer.subarray(0, bytesRead).toString("utf8");
  } catch {
    return "";
  } finally {
    await handle2?.close().catch(() => {
    });
  }
}
var wordsOf = (bytes) => Math.max(1, Math.round(bytes / 3));
async function statOrNull(target) {
  try {
    return await fs.stat(target);
  } catch {
    return null;
  }
}
async function readConfig(root) {
  try {
    const raw = await fs.readFile(path.join(root, CONFIG_REL), "utf8");
    const parsed = JSON.parse(raw);
    return {
      version: typeof parsed?.version === "number" ? parsed.version : 1,
      sections: typeof parsed?.sections === "object" && parsed.sections !== null ? parsed.sections : {}
    };
  } catch {
    return { version: 1, sections: {} };
  }
}
async function writeConfig(root, config) {
  const file = path.join(root, CONFIG_REL);
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, `${JSON.stringify(config, null, 2)}
`, "utf8");
  await fs.rename(tmp, file);
}
async function listSections(root) {
  const config = await readConfig(root);
  const entries = await fs.readdir(root, { withFileTypes: true });
  const sections = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
    const dir = path.join(root, entry.name);
    let docs = 0;
    let updatedAt = 0;
    const scan = async (folder, depth) => {
      const items = await fs.readdir(folder, { withFileTypes: true }).catch(() => []);
      for (const item of items) {
        if (item.name.startsWith(".")) continue;
        const full = path.join(folder, item.name);
        if (item.isDirectory() && depth < 2) {
          await scan(full, depth + 1);
        } else if (item.isFile() && MD.test(item.name)) {
          docs += 1;
          const stat = await statOrNull(full);
          if (stat !== null && stat.mtimeMs > updatedAt) updatedAt = stat.mtimeMs;
        }
      }
    };
    await scan(dir, 0);
    const meta = config.sections[entry.name] ?? {};
    sections.push({
      id: entry.name,
      title: typeof meta.title === "string" && meta.title.trim() !== "" ? meta.title : entry.name,
      color: typeof meta.color === "string" ? meta.color : null,
      order: Number.isFinite(meta.order) ? meta.order : 1e3,
      hidden: meta.hidden === true,
      docs,
      updatedAt
    });
  }
  sections.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id, "zh-Hans-CN"));
  return {
    sections: sections.filter((section) => !section.hidden),
    allSections: sections,
    root
  };
}
async function listBooks(root, section) {
  const dir = safePath(root, section);
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const books = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    const stat = await statOrNull(full);
    if (stat === null) continue;
    if (entry.isFile() && MD.test(entry.name)) {
      const meta = parseFrontmatter(await head(full)).meta;
      books.push({
        kind: "file",
        name: entry.name,
        rel: `${section}/${entry.name}`,
        title: meta.title ?? entry.name.replace(MD, ""),
        summary: meta.summary ?? meta.description ?? "",
        tags: meta.tags ?? "",
        words: wordsOf(stat.size),
        mtime: stat.mtimeMs
      });
    } else if (entry.isDirectory()) {
      const items = await fs.readdir(full, { withFileTypes: true }).catch(() => []);
      const chapters = [];
      for (const item of items.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"))) {
        if (!item.isFile() || !MD.test(item.name)) continue;
        const chapterStat = await statOrNull(path.join(full, item.name));
        chapters.push({
          name: item.name,
          rel: `${section}/${entry.name}/${item.name}`,
          title: item.name.replace(MD, ""),
          words: chapterStat === null ? 0 : wordsOf(chapterStat.size),
          mtime: chapterStat?.mtimeMs ?? 0
        });
      }
      if (chapters.length === 0) continue;
      books.push({
        kind: "dir",
        name: entry.name,
        rel: `${section}/${entry.name}`,
        title: entry.name,
        summary: `${chapters.length} \u5377`,
        words: chapters.reduce((sum, chapter) => sum + chapter.words, 0),
        mtime: Math.max(...chapters.map((chapter) => chapter.mtime)),
        chapters
      });
    }
  }
  books.sort((a, b) => a.title.localeCompare(b.title, "zh-Hans-CN"));
  return { section, books };
}
async function search(root, query) {
  const hits = [];
  const needle = query.toLowerCase();
  const walk = async (dir, rel, depth) => {
    if (hits.length >= 40 || depth > 4) return;
    const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
    for (const entry of entries) {
      if (hits.length >= 40) return;
      if (entry.name.startsWith(".")) continue;
      const full = path.join(dir, entry.name);
      const childRel = rel === "" ? entry.name : `${rel}/${entry.name}`;
      if (entry.isDirectory()) {
        await walk(full, childRel, depth + 1);
      } else if (entry.isFile() && MD.test(entry.name)) {
        const stat = await statOrNull(full);
        if (stat === null || stat.size > 2 * 1024 * 1024) continue;
        const text = await fs.readFile(full, "utf8").catch(() => "");
        const index = text.toLowerCase().indexOf(needle);
        if (index < 0) continue;
        hits.push({
          rel: childRel,
          section: childRel.split("/")[0],
          title: entry.name.replace(MD, ""),
          snippet: text.slice(Math.max(0, index - 40), index + needle.length + 60).replace(/\s+/g, " ").trim()
        });
      }
    }
  };
  await walk(root, "", 0);
  return { query, hits };
}
function safeName(input, fallback) {
  const cleaned = String(input ?? "").replace(/[\\/:*?"<>|\u0000-\u001f]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned === "" ? fallback : cleaned;
}
async function ensureUnique(dir, base, ext = ".md") {
  let candidate = `${base}${ext}`;
  let index = 2;
  while (await statOrNull(path.join(dir, candidate)) !== null) {
    candidate = `${base} (${index})${ext}`;
    index += 1;
  }
  return candidate;
}
async function trash(root, target) {
  const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
  const dir = path.join(root, TRASH_REL, stamp);
  await fs.mkdir(dir, { recursive: true });
  await fs.rename(target, path.join(dir, path.basename(target)));
}
async function handle(ctx, req, res) {
  const url = new URL(req.url ?? "/", "http://tcm.local");
  const route = url.pathname.slice(PREFIX.length).replace(/\/+$/, "") || "/";
  const method = (req.method ?? "GET").toUpperCase();
  const q = url.searchParams;
  try {
    if (route === "/workspaces" && method === "GET") {
      const workspaces = await workspaceDirs(ctx);
      return ok(res, { workspaces, cwd: process.cwd() });
    }
    if (route === "/health" && method === "GET") {
      return ok(res, { plugin: "dsh-plugin-tcm-learning", pid: process.pid });
    }
    if (route === "/bootstrap" && method === "GET") {
      const root = await resolveRoot(ctx, q.get("root"));
      const listed = await listSections(root);
      return ok(res, { ...listed, workspace: path.basename(root) });
    }
    if (route === "/section" && method === "GET") {
      const root = await resolveRoot(ctx, q.get("root"));
      const section = q.get("section");
      if (section === null || section === "") return fail(res, 400, "BAD_SECTION", "\u7F3A\u5C11\u677F\u5757\u540D");
      const listed = await listBooks(root, section);
      const config = await readConfig(root);
      const meta = config.sections[section] ?? {};
      return ok(res, {
        section: {
          id: section,
          title: typeof meta.title === "string" ? meta.title : section,
          color: typeof meta.color === "string" ? meta.color : null,
          order: Number.isFinite(meta.order) ? meta.order : 1e3
        },
        books: listed.books
      });
    }
    if (route === "/doc" && method === "GET") {
      const root = await resolveRoot(ctx, q.get("root"));
      const file = safePath(root, q.get("path"));
      if (!MD.test(file)) return fail(res, 400, "NOT_MARKDOWN", "\u53EA\u652F\u6301 Markdown \u6587\u4EF6");
      const [raw, stat] = await Promise.all([fs.readFile(file, "utf8"), statOrNull(file)]);
      if (stat === null) return fail(res, 404, "NOT_FOUND", "\u6587\u4EF6\u4E0D\u5B58\u5728");
      const { meta, body } = parseFrontmatter(raw);
      return ok(res, {
        rel: path.relative(root, file).replace(/\\/g, "/"),
        title: meta.title ?? path.basename(file).replace(MD, ""),
        meta,
        content: body,
        raw,
        words: wordsOf(stat.size),
        mtime: stat.mtimeMs
      });
    }
    if (route === "/doc" && method === "PUT") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const file = safePath(root, body.path);
      if (!MD.test(file)) return fail(res, 400, "NOT_MARKDOWN", "\u53EA\u652F\u6301 Markdown \u6587\u4EF6");
      if (typeof body.content !== "string") return fail(res, 400, "BAD_CONTENT", "content \u5FC5\u987B\u662F\u5B57\u7B26\u4E32");
      const stat = await statOrNull(file);
      if (stat !== null && typeof body.mtime === "number" && Math.abs(stat.mtimeMs - body.mtime) > 1) {
        return fail(res, 409, "CONFLICT", "\u6587\u4EF6\u5DF2\u88AB\u522B\u5904\u4FEE\u6539\uFF0C\u8BF7\u91CD\u65B0\u8F7D\u5165\u540E\u518D\u4FDD\u5B58");
      }
      await fs.mkdir(path.dirname(file), { recursive: true });
      const tmp = `${file}.${process.pid}.tmp`;
      await fs.writeFile(tmp, body.content, "utf8");
      await fs.rename(tmp, file);
      const next = await statOrNull(file);
      return ok(res, { rel: path.relative(root, file).replace(/\\/g, "/"), mtime: next?.mtimeMs ?? 0 });
    }
    if (route === "/doc" && method === "POST") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const section = safeName(body.section, "\u672A\u5206\u7C7B");
      const title = safeName(body.title, `\u672A\u547D\u540D-${Date.now()}`);
      const dir = safePath(root, section);
      await fs.mkdir(dir, { recursive: true });
      if (body.kind === "dir") {
        const folder = await ensureUnique(dir, title, "");
        await fs.mkdir(path.join(dir, folder), { recursive: true });
        const chapter = await ensureUnique(path.join(dir, folder), "01-\u5377\u9996", ".md");
        await fs.writeFile(path.join(dir, folder, chapter), `---
title: ${title}
---

# ${title}

`, "utf8");
        return ok(res, { rel: `${section}/${folder}/${chapter}`, kind: "dir" });
      }
      const file = await ensureUnique(dir, title, ".md");
      await fs.writeFile(path.join(dir, file), `---
title: ${title}
---

# ${title}

`, "utf8");
      return ok(res, { rel: `${section}/${file}`, kind: "file" });
    }
    if (route === "/doc" && method === "PATCH") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const from = safePath(root, body.path);
      const dir = path.dirname(from);
      const nextName = safeName(body.title, path.basename(from).replace(MD, ""));
      const isFile = MD.test(from);
      const to = path.join(dir, isFile ? `${nextName}.md` : nextName);
      if (norm(from) !== norm(to) && await statOrNull(to) !== null) {
        return fail(res, 409, "EXISTS", "\u540C\u540D\u6587\u4EF6\u5DF2\u5B58\u5728");
      }
      await fs.rename(from, to);
      return ok(res, { rel: path.relative(root, to).replace(/\\/g, "/") });
    }
    if (route === "/doc" && method === "DELETE") {
      const root = await resolveRoot(ctx, q.get("root"));
      const target = safePath(root, q.get("path"));
      await trash(root, target);
      return ok(res, { trashed: path.relative(root, target).replace(/\\/g, "/") });
    }
    if (route === "/section" && method === "POST") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const name = safeName(body.name, `\u65B0\u677F\u5757-${Date.now()}`);
      const dir = safePath(root, name);
      if (await statOrNull(dir) !== null) return fail(res, 409, "EXISTS", "\u677F\u5757\u5DF2\u5B58\u5728");
      await fs.mkdir(dir, { recursive: true });
      return ok(res, { section: { id: name, title: name, docs: 0, updatedAt: 0 } });
    }
    if (route === "/section" && method === "PATCH") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const from = safePath(root, body.from);
      const to = path.join(root, safeName(body.to, path.basename(from)));
      if (norm(from) !== norm(to) && await statOrNull(to) !== null) {
        return fail(res, 409, "EXISTS", "\u540C\u540D\u677F\u5757\u5DF2\u5B58\u5728");
      }
      await fs.rename(from, to);
      const config = await readConfig(root);
      const meta = config.sections[path.basename(from)];
      if (meta !== void 0) {
        delete config.sections[path.basename(from)];
        config.sections[path.basename(to)] = meta;
        await writeConfig(root, config);
      }
      return ok(res, { section: { id: path.basename(to), title: path.basename(to) } });
    }
    if (route === "/section" && method === "DELETE") {
      const root = await resolveRoot(ctx, q.get("root"));
      const target = safePath(root, q.get("name"));
      await trash(root, target);
      const config = await readConfig(root);
      delete config.sections[path.basename(target)];
      await writeConfig(root, config);
      return ok(res, { trashed: path.basename(target) });
    }
    if (route === "/config" && method === "GET") {
      const root = await resolveRoot(ctx, q.get("root"));
      const config = await readConfig(root);
      const listed = await listSections(root);
      return ok(res, { config, sections: listed.allSections });
    }
    if (route === "/config" && method === "PUT") {
      const body = await readJson(req);
      const root = await resolveRoot(ctx, body.root);
      const config = await readConfig(root);
      const incoming = body.config?.sections ?? body.sections ?? {};
      for (const [name, meta] of Object.entries(incoming)) {
        const dir = safePath(root, name);
        if (await statOrNull(dir) === null) continue;
        config.sections[name] = {
          title: typeof meta?.title === "string" && meta.title.trim() !== "" ? meta.title.trim() : name,
          color: typeof meta?.color === "string" ? meta.color : null,
          order: Number.isFinite(meta?.order) ? meta.order : 1e3,
          hidden: meta?.hidden === true
        };
      }
      await writeConfig(root, config);
      return ok(res, { config });
    }
    if (route === "/search" && method === "GET") {
      const root = await resolveRoot(ctx, q.get("root"));
      const query = (q.get("q") ?? "").trim();
      if (query === "") return ok(res, { query, hits: [] });
      const result = await search(root, query);
      return ok(res, result);
    }
    return fail(res, 404, "NO_ROUTE", `\u672A\u77E5\u63A5\u53E3\uFF1A${method} ${route}`);
  } catch (error) {
    const status = typeof error?.status === "number" ? error.status : 500;
    if (status >= 500) ctx.logger?.warn?.("[tcm] api error", error);
    return fail(res, status, status === 500 ? "INTERNAL" : "BAD_REQUEST", String(error?.message ?? error));
  }
}
function apply(ctx) {
  ctx.effect(
    () => ctx.webServer.register({
      kind: "prefix",
      path: PREFIX,
      handler: (req, res) => {
        void handle(ctx, req, res);
      }
    }),
    "tcm-learning: api routes"
  );
  ctx.logger?.info?.("[tcm] \u4E2D\u533B\u5B66\u4E60 API \u5DF2\u6302\u8F7D\u4E8E /tcm/api");
}
export {
  apply,
  inject
};
