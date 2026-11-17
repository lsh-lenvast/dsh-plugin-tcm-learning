/** 中医学习插件的全部样式：一次性注入到 <head>，靠 CSS 变量切换明暗。 */
export const CSS = String.raw`
.tcm-root {
  --tcm-paper: #f6f2e8;
  --tcm-paper-2: #fffdf7;
  --tcm-paper-3: #efe8d8;
  --tcm-ink: #211e19;
  --tcm-ink-2: #4b4438;
  --tcm-ink-3: #8b8172;
  --tcm-line: #e3dac7;
  --tcm-line-2: #d3c7ae;
  --tcm-accent: #a8332a;
  --tcm-accent-soft: #c4584c;
  --tcm-jade: #4d6b57;
  --tcm-shadow: 0 10px 28px rgba(62, 46, 24, .10);
  --tcm-shadow-soft: 0 2px 8px rgba(62, 46, 24, .07);
  --tcm-serif: "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", "SimSun", serif;
  --tcm-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif;
  --tcm-mono: "JetBrains Mono", "Cascadia Code", "Consolas", "SFMono-Regular", monospace;

  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background:
    radial-gradient(1200px 500px at 12% -10%, rgba(168, 51, 42, .05), transparent 60%),
    radial-gradient(900px 420px at 96% 4%, rgba(77, 107, 87, .06), transparent 62%),
    var(--tcm-paper);
  color: var(--tcm-ink);
  font-family: var(--tcm-sans);
  font-size: 14px;
  overflow: hidden;
}
body[data-ds-dark-theme] .tcm-root {
  --tcm-paper: #171410;
  --tcm-paper-2: #201c17;
  --tcm-paper-3: #2a251e;
  --tcm-ink: #ece5d8;
  --tcm-ink-2: #c3b9a8;
  --tcm-ink-3: #8b8172;
  --tcm-line: #332d25;
  --tcm-line-2: #413a2f;
  --tcm-accent: #d4685c;
  --tcm-accent-soft: #e08a7d;
  --tcm-jade: #86a98f;
  --tcm-shadow: 0 12px 32px rgba(0, 0, 0, .5);
  --tcm-shadow-soft: 0 2px 10px rgba(0, 0, 0, .35);
  background:
    radial-gradient(1100px 460px at 10% -8%, rgba(212, 104, 92, .08), transparent 62%),
    radial-gradient(880px 400px at 94% 6%, rgba(134, 169, 143, .07), transparent 64%),
    var(--tcm-paper);
}

.tcm-root *, .tcm-root *::before, .tcm-root *::after { box-sizing: border-box; }

/* ── 顶栏 ───────────────────────────────────────────── */
.tcm-top {
  flex: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: calc(var(--dsh-frame-top-clearance, 0px) + 14px) 28px 12px;
  border-bottom: 1px solid var(--tcm-line);
  background: color-mix(in srgb, var(--tcm-paper) 86%, transparent);
  backdrop-filter: blur(14px) saturate(1.1);
  position: relative;
  z-index: 6;
}
.tcm-brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
.tcm-seal {
  width: 30px; height: 30px; flex: none;
  display: grid; place-items: center;
  border-radius: 7px;
  background: linear-gradient(155deg, var(--tcm-accent), #8d251d);
  color: #fff6ee;
  font-family: var(--tcm-serif);
  font-size: 17px;
  line-height: 1;
  box-shadow: 0 4px 12px rgba(168, 51, 42, .28);
  letter-spacing: -1px;
}
.tcm-brand-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.tcm-brand-title { font-family: var(--tcm-serif); font-size: 17px; font-weight: 600; letter-spacing: .06em; }
.tcm-brand-sub { font-size: 11px; color: var(--tcm-ink-3); letter-spacing: .04em; }

.tcm-tabs { display: inline-flex; gap: 2px; padding: 3px; border-radius: 10px; background: var(--tcm-paper-3); }
.tcm-tab {
  appearance: none; border: none; background: transparent; cursor: pointer;
  padding: 6px 15px; border-radius: 8px;
  font: inherit; font-size: 13px; color: var(--tcm-ink-2);
  transition: background .16s ease, color .16s ease;
}
.tcm-tab:hover { color: var(--tcm-ink); }
.tcm-tab[data-active='true'] { background: var(--tcm-paper-2); color: var(--tcm-ink); box-shadow: var(--tcm-shadow-soft); font-weight: 600; }

.tcm-top-spacer { flex: 1 1 auto; }

.tcm-search { position: relative; width: 260px; max-width: 34vw; }
.tcm-search input {
  width: 100%; appearance: none;
  border: 1px solid var(--tcm-line-2); border-radius: 9px;
  background: var(--tcm-paper-2); color: var(--tcm-ink);
  padding: 8px 12px 8px 32px; font: inherit; font-size: 13px;
  transition: border-color .16s ease, box-shadow .16s ease;
}
.tcm-search input:focus { outline: none; border-color: var(--tcm-accent-soft); box-shadow: 0 0 0 3px rgba(168, 51, 42, .12); }
.tcm-search .tcm-search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--tcm-ink-3); display: flex; }
.tcm-results {
  position: absolute; top: calc(100% + 6px); right: 0; width: min(520px, 80vw);
  max-height: 60vh; overflow: auto; padding: 6px;
  background: var(--tcm-paper-2); border: 1px solid var(--tcm-line-2);
  border-radius: 12px; box-shadow: var(--tcm-shadow); z-index: 30;
}
.tcm-result { display: block; width: 100%; text-align: left; border: none; background: transparent; cursor: pointer; border-radius: 8px; padding: 8px 10px; color: inherit; font: inherit; }
.tcm-result:hover { background: var(--tcm-paper-3); }
.tcm-result-title { font-size: 13px; font-weight: 600; }
.tcm-result-meta { font-size: 11px; color: var(--tcm-ink-3); margin-top: 2px; }
.tcm-result-snippet { font-size: 12px; color: var(--tcm-ink-2); margin-top: 4px; line-height: 1.5; }

.tcm-select {
  appearance: none; border: 1px solid var(--tcm-line-2); border-radius: 9px;
  background: var(--tcm-paper-2); color: var(--tcm-ink); font: inherit; font-size: 12px;
  padding: 7px 26px 7px 10px; cursor: pointer; max-width: 200px;
  background-image: linear-gradient(45deg, transparent 50%, var(--tcm-ink-3) 50%), linear-gradient(135deg, var(--tcm-ink-3) 50%, transparent 50%);
  background-position: calc(100% - 14px) 51%, calc(100% - 9px) 51%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
}

/* ── 通用按钮 ───────────────────────────────────────── */
.tcm-btn {
  appearance: none; cursor: pointer; font: inherit; font-size: 13px;
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 13px; border-radius: 9px;
  border: 1px solid var(--tcm-line-2); background: var(--tcm-paper-2); color: var(--tcm-ink);
  transition: background .15s ease, border-color .15s ease, transform .1s ease;
}
.tcm-btn:hover { background: var(--tcm-paper-3); }
.tcm-btn:active { transform: translateY(1px); }
.tcm-btn[disabled] { opacity: .5; cursor: default; }
.tcm-btn-primary { background: var(--tcm-accent); border-color: transparent; color: #fff8f2; }
.tcm-btn-primary:hover { background: var(--tcm-accent-soft); }
.tcm-btn-ghost { background: transparent; border-color: transparent; color: var(--tcm-ink-2); }
.tcm-btn-ghost:hover { background: var(--tcm-paper-3); color: var(--tcm-ink); }
.tcm-btn-sm { padding: 4px 9px; font-size: 12px; border-radius: 7px; }
.tcm-icon-btn {
  appearance: none; cursor: pointer; width: 32px; height: 32px; flex: none;
  display: grid; place-items: center; border-radius: 9px;
  border: 1px solid transparent; background: transparent; color: var(--tcm-ink-2);
}
.tcm-icon-btn:hover { background: var(--tcm-paper-3); color: var(--tcm-ink); }
.tcm-icon-btn[data-active='true'] { color: var(--tcm-accent); }

/* ── 内容区 ─────────────────────────────────────────── */
.tcm-body { flex: 1 1 auto; min-height: 0; overflow: auto; scroll-behavior: smooth; }
.tcm-wrap { width: 100%; max-width: 1180px; margin: 0 auto; padding: 30px 28px 80px; }

.tcm-crumb { display: flex; align-items: center; gap: 8px; margin-bottom: 18px; min-height: 32px; }
.tcm-crumb-title { font-family: var(--tcm-serif); font-size: 20px; font-weight: 600; letter-spacing: .04em; }
.tcm-crumb-meta { font-size: 12px; color: var(--tcm-ink-3); }
.tcm-crumb-spacer { flex: 1; }

/* 板块卡 */
.tcm-sections { display: grid; grid-template-columns: repeat(auto-fill, minmax(216px, 1fr)); gap: 16px; }
.tcm-section-card {
  position: relative; overflow: hidden; cursor: pointer; text-align: left;
  border: 1px solid var(--tcm-line); border-radius: 14px;
  background:
    linear-gradient(168deg, var(--tcm-paper-2) 26%, color-mix(in srgb, var(--tcm-card-color, var(--tcm-accent)) 13%, var(--tcm-paper-2)));
  padding: 20px 18px 18px 22px; color: inherit; font: inherit; min-height: 132px;
  display: flex; flex-direction: column; justify-content: center; gap: 2px;
  box-shadow: var(--tcm-shadow-soft);
  transition: transform .18s cubic-bezier(.2,.7,.3,1), box-shadow .18s ease, border-color .18s ease;
}
.tcm-section-card::after {
  content: ''; position: absolute; inset: 0 0 auto 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .8), transparent);
  opacity: .7; pointer-events: none;
}
body[data-ds-dark-theme] .tcm-section-card::after { opacity: .18; }
.tcm-section-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
  background: var(--tcm-card-color, var(--tcm-accent));
  opacity: .9;
}
.tcm-section-card:hover { transform: translateY(-3px); box-shadow: var(--tcm-shadow); border-color: var(--tcm-line-2); }
.tcm-section-name { font-family: var(--tcm-serif); font-size: 21px; font-weight: 600; letter-spacing: .08em; }
.tcm-section-count { margin-top: 10px; font-size: 12px; color: var(--tcm-ink-3); display: flex; align-items: center; gap: 8px; }
.tcm-section-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--tcm-line-2); }
.tcm-section-glyph {
  position: absolute; right: 8px; bottom: -6px;
  font-family: var(--tcm-serif); font-size: 68px; line-height: 1;
  color: var(--tcm-card-color, var(--tcm-accent)); opacity: .1; pointer-events: none;
}
.tcm-add-card {
  display: grid; place-items: center; gap: 6px;
  border: 1px dashed var(--tcm-line-2); border-radius: 14px; background: transparent;
  color: var(--tcm-ink-3); cursor: pointer; font: inherit; font-size: 13px;
  min-height: 118px; transition: color .16s ease, border-color .16s ease, background .16s ease;
}
.tcm-add-card:hover { color: var(--tcm-accent); border-color: var(--tcm-accent-soft); background: color-mix(in srgb, var(--tcm-accent) 4%, transparent); }

/* 书架：书脊站立 + Dock 式放大 */
.tcm-shelf-area { display: flex; flex-direction: column; }
.tcm-shelf-block { position: relative; width: 100%; max-width: 100%; margin: 0 0 26px; }
.tcm-shelf-row {
  position: relative; z-index: 1;
  display: flex; align-items: flex-end; gap: 4px;
  width: 100%; padding: 0 16px; box-sizing: border-box;
}
.tcm-shelf-board {
  position: relative; z-index: 2;
  height: 11px; margin: 0 0 30px; border-radius: 2px 2px 5px 5px;
  background: linear-gradient(180deg, #d8c49d 0%, #c4ac83 40%, #a58c60 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .55),
    inset 0 -3px 4px rgba(90, 62, 24, .28),
    0 12px 18px -12px rgba(55, 38, 12, .65);
}
body[data-ds-dark-theme] .tcm-shelf-board {
  background: linear-gradient(180deg, #4a3f30 0%, #3a3126 44%, #282118 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .08),
    inset 0 -3px 4px rgba(0, 0, 0, .55),
    0 14px 22px -12px #000;
}

.tcm-spine {
  position: relative; flex: none; z-index: 1;
  border: none; cursor: pointer; background-clip: padding-box;
  border-radius: 3px 3px 1px 1px;
  color: #2a241c;
  background:
    linear-gradient(90deg, rgba(70, 48, 20, .16) 0, rgba(70, 48, 20, .02) 8px, rgba(255, 255, 255, .16) 46%, rgba(255, 255, 255, .04) 70%, rgba(70, 48, 20, .12) 100%),
    linear-gradient(180deg, var(--tcm-book-bg, #e9dcc0), color-mix(in srgb, var(--tcm-book-bg, #e9dcc0) 90%, #6b4f2a 8%));
  box-shadow:
    inset 1px 0 0 rgba(255, 255, 255, .3),
    inset -1px 0 0 rgba(255, 255, 255, .16),
    inset 0 -6px 10px -6px rgba(60, 40, 15, .35),
    2px 0 0 rgba(255, 255, 255, .16),
    0 10px 14px -10px rgba(50, 35, 15, .55);
  /* 只过渡 transform：布局尺寸从不变，动画全部落在合成层上。 */
  transform-origin: bottom center;
  will-change: transform;
  backface-visibility: hidden;
  transition: transform .26s cubic-bezier(.16, .9, .24, 1);
  font: inherit;
}
.tcm-spine-inner {
  position: absolute; left: 50%; bottom: 0;
  width: var(--spine-w, 54px); margin-left: calc(var(--spine-w, 54px) / -2);
  display: flex; flex-direction: column; align-items: center;
  padding: 13px 0 9px; box-sizing: border-box;
  transform-origin: bottom center;
  /* 反向缩放：书脊被拉宽拉高时，字仍保持原字号、不跟着变形。 */
  transition: transform .26s cubic-bezier(.16, .9, .24, 1);
}
.tcm-spine::before {
  content: ''; position: absolute; left: 8px; right: 8px; top: 11px; height: 2px;
  border-radius: 2px;
  background: var(--tcm-book-accent, var(--tcm-accent));
  opacity: .72;
  box-shadow: 0 4px 0 -1px color-mix(in srgb, var(--tcm-book-accent, var(--tcm-accent)) 45%, transparent);
}
/* 悬停时的「抽出」投影：用透明度过渡代替 box-shadow 过渡，
   这样整段动画只有 transform / opacity，全程走合成层。 */
  content: ''; position: absolute; inset: 0; border-radius: inherit;
  box-shadow:
    inset 1px 0 0 rgba(255, 255, 255, .45),
    inset -1px 0 0 rgba(255, 255, 255, .3),
    inset 0 -8px 12px -8px rgba(60, 40, 15, .3),
    0 18px 26px -14px rgba(40, 26, 8, .7);
  opacity: 0; pointer-events: none;
  transition: opacity .2s ease;
}
.tcm-spine[data-open='true'] { z-index: 6; }
.tcm-spine[data-open='true']::after { opacity: 1; }
.tcm-spine:focus-visible { outline: 2px solid var(--tcm-accent); outline-offset: 3px; }

.tcm-spine-title {
  writing-mode: vertical-rl; text-orientation: upright;
  flex: 1; min-height: 0;
  display: flex; align-items: flex-start; justify-content: center;
  margin-top: 12px; padding: 0 2px;
  font-family: var(--tcm-serif); font-size: var(--spine-title-size, 15px); font-weight: 600; letter-spacing: .1em;
  line-height: 1.15; overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, #000 0, #000 86%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 0, #000 86%, transparent 100%);
}
.tcm-spine-foot {
  margin-top: 7px; font-size: 9.5px; letter-spacing: .02em; white-space: nowrap;
  color: rgba(58, 44, 22, .5);
}
/* 套书用「卷数」小框区分，而不是把书拔高——所有书脊保持等高。 */
.tcm-spine[data-series='true'] .tcm-spine-foot {
  padding: 0 3px; border: 1px solid rgba(58, 44, 22, .3); border-radius: 2px;
  color: rgba(58, 44, 22, .62);
}
.tcm-spine-tip {
  position: absolute; left: 50%; bottom: calc(100% + 10px + var(--tcm-tip-rise, 0px));
  display: flex; flex-direction: column; gap: 2px;
  padding: 6px 10px; border-radius: 9px;
  background: var(--tcm-paper-2); border: 1px solid var(--tcm-line-2);
  box-shadow: var(--tcm-shadow);
  font-size: 12px; line-height: 1.4; white-space: nowrap; text-align: center;
  color: var(--tcm-ink); pointer-events: none; z-index: 12;
  opacity: 0; transform: translate(-50%, 6px) scale(.97);
  transition: opacity .18s ease, transform .22s cubic-bezier(.22,.86,.28,1);
}
.tcm-spine-tip strong { font-family: var(--tcm-serif); font-size: 13px; font-weight: 600; letter-spacing: .04em; }
.tcm-spine-tip em { font-style: normal; font-size: 11px; color: var(--tcm-ink-3); }
.tcm-spine[data-open='true'] .tcm-spine-tip { opacity: 1; transform: translate(-50%, 0) scale(1); }
.tcm-spine-tip::after {
  content: ''; position: absolute; left: 50%; bottom: -4px; width: 7px; height: 7px;
  transform: translateX(-50%) rotate(45deg);
  background: var(--tcm-paper-2); border-right: 1px solid var(--tcm-line-2); border-bottom: 1px solid var(--tcm-line-2);
}

.tcm-empty { display: grid; place-items: center; gap: 10px; padding: 72px 20px; color: var(--tcm-ink-3); text-align: center; }
.tcm-empty-icon { font-family: var(--tcm-serif); font-size: 44px; opacity: .35; }
.tcm-empty-text { font-size: 14px; }
.tcm-empty-hint { font-size: 12px; opacity: .8; max-width: 320px; line-height: 1.7; }

/* 阅读器 */
.tcm-reader-bar {
  position: sticky; top: 0; z-index: 5;
  display: flex; align-items: center; gap: 10px;
  padding: 12px 28px; border-bottom: 1px solid var(--tcm-line);
  background: color-mix(in srgb, var(--tcm-paper) 88%, transparent);
  backdrop-filter: blur(12px);
}
.tcm-reader-title { font-family: var(--tcm-serif); font-size: 16px; font-weight: 600; letter-spacing: .05em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tcm-reader-progress { position: absolute; left: 0; bottom: -1px; height: 2px; background: var(--tcm-accent); transition: width .12s linear; }

.tcm-reader-layout { display: flex; gap: 40px; align-items: flex-start; max-width: 1040px; margin: 0 auto; padding: 40px 28px 120px; }
.tcm-article { flex: 1 1 auto; min-width: 0; max-width: 680px; }
.tcm-article .tcm-doc-title {
  font-family: var(--tcm-serif); font-size: 34px; font-weight: 600; letter-spacing: .1em;
  text-align: center; margin: 6px 0 6px; line-height: 1.4;
}
.tcm-article .tcm-doc-rule {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  margin: 0 0 34px; color: var(--tcm-ink-3); font-size: 12px; letter-spacing: .2em;
}
.tcm-article .tcm-doc-rule::before, .tcm-article .tcm-doc-rule::after {
  content: ''; height: 1px; width: 54px; background: linear-gradient(90deg, transparent, var(--tcm-line-2), transparent);
}
.tcm-prose { font-family: var(--tcm-serif); font-size: var(--tcm-read-size, 17px); line-height: 1.95; color: var(--tcm-ink); }
.tcm-prose > h1:first-child { display: none; }
.tcm-prose > p { text-indent: 2em; margin: 0 0 1.05em; }
.tcm-prose > p:first-of-type { text-indent: 2em; }
.tcm-prose h1, .tcm-prose h2, .tcm-prose h3, .tcm-prose h4 { font-family: var(--tcm-serif); line-height: 1.5; }
.tcm-prose h1 { font-size: 1.55em; text-align: center; margin: 1.6em 0 .8em; letter-spacing: .08em; }
.tcm-prose h2 {
  font-size: 1.22em; margin: 2em 0 .8em; padding-left: 12px; position: relative; letter-spacing: .06em;
}
.tcm-prose h2::before { content: ''; position: absolute; left: 0; top: .18em; bottom: .18em; width: 3px; border-radius: 2px; background: var(--tcm-accent); }
.tcm-prose h3 { font-size: 1.08em; margin: 1.6em 0 .6em; color: var(--tcm-ink-2); letter-spacing: .04em; }
.tcm-prose blockquote {
  margin: 1.4em 0; padding: .7em 1.1em; text-indent: 0;
  border-left: 3px solid var(--tcm-jade);
  background: color-mix(in srgb, var(--tcm-jade) 6%, transparent);
  border-radius: 0 8px 8px 0; color: var(--tcm-ink-2);
}
.tcm-prose blockquote p { text-indent: 0; margin: .3em 0; }
.tcm-prose ul, .tcm-prose ol { margin: 1em 0; padding-left: 1.6em; }
.tcm-prose li { margin: .3em 0; }
.tcm-prose li > p { text-indent: 0; }
.tcm-prose a { color: var(--tcm-accent); text-decoration: none; border-bottom: 1px solid color-mix(in srgb, var(--tcm-accent) 35%, transparent); }
.tcm-prose a:hover { border-bottom-color: var(--tcm-accent); }
.tcm-prose code { font-family: var(--tcm-mono); font-size: .88em; background: var(--tcm-paper-3); padding: .12em .38em; border-radius: 4px; }
.tcm-prose pre { font-family: var(--tcm-mono); font-size: .86em; background: var(--tcm-paper-3); padding: 14px 16px; border-radius: 10px; overflow: auto; border: 1px solid var(--tcm-line); }
.tcm-prose pre code { background: transparent; padding: 0; font-size: 1em; }
.tcm-prose table { border-collapse: collapse; width: 100%; margin: 1.4em 0; font-size: .92em; }
.tcm-prose th, .tcm-prose td { border: 1px solid var(--tcm-line-2); padding: 8px 12px; text-align: left; }
.tcm-prose th { background: var(--tcm-paper-3); font-weight: 600; }
.tcm-prose hr { border: none; height: 1px; background: var(--tcm-line-2); margin: 2.2em 0; }
.tcm-prose img { max-width: 100%; border-radius: 8px; }
.tcm-prose strong { font-weight: 700; color: color-mix(in srgb, var(--tcm-ink) 88%, var(--tcm-accent)); }

.tcm-toc { flex: none; width: 190px; position: sticky; top: 76px; padding-top: 52px; }
.tcm-toc-label { font-size: 11px; letter-spacing: .18em; color: var(--tcm-ink-3); margin-bottom: 10px; }
.tcm-toc-link {
  display: block; width: 100%; text-align: left; border: none; background: transparent; cursor: pointer;
  font: inherit; font-size: 12px; line-height: 1.55; color: var(--tcm-ink-3);
  padding: 3px 0 3px 10px; border-left: 2px solid transparent; border-radius: 0 6px 6px 0;
}
.tcm-toc-link:hover { color: var(--tcm-ink); }
.tcm-toc-link[data-level='3'] { padding-left: 22px; font-size: 11.5px; opacity: .88; }
.tcm-toc-link[data-active='true'] { color: var(--tcm-accent); border-left-color: var(--tcm-accent); }

.tcm-pager { display: flex; gap: 12px; margin-top: 52px; padding-top: 20px; border-top: 1px solid var(--tcm-line); }
.tcm-pager-item {
  flex: 1; min-width: 0; text-align: left; border: 1px solid var(--tcm-line); border-radius: 12px;
  background: var(--tcm-paper-2); padding: 12px 14px; cursor: pointer; font: inherit; color: inherit;
  transition: border-color .16s ease, transform .16s ease;
}
.tcm-pager-item:hover { border-color: var(--tcm-line-2); transform: translateY(-2px); }
.tcm-pager-item[data-dir='next'] { text-align: right; }
.tcm-pager-kicker { font-size: 11px; color: var(--tcm-ink-3); letter-spacing: .12em; }
.tcm-pager-title { font-family: var(--tcm-serif); font-size: 14px; margin-top: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* 配置页 */
.tcm-config { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 22px; align-items: start; }
.tcm-panel {
  border: 1px solid var(--tcm-line); border-radius: 14px; background: var(--tcm-paper-2);
  box-shadow: var(--tcm-shadow-soft); overflow: hidden;
}
.tcm-panel-head {
  display: flex; align-items: center; gap: 8px; padding: 13px 15px;
  border-bottom: 1px solid var(--tcm-line); font-size: 13px; font-weight: 600; letter-spacing: .04em;
}
.tcm-panel-head .tcm-crumb-spacer { flex: 1; }
.tcm-panel-body { padding: 10px; }
.tcm-panel-note { padding: 12px 15px; font-size: 12px; line-height: 1.7; color: var(--tcm-ink-3); border-top: 1px solid var(--tcm-line); }

.tcm-row {
  display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 9px;
  cursor: pointer; color: inherit; font: inherit; background: transparent; border: none; width: 100%; text-align: left;
}
.tcm-row:hover { background: var(--tcm-paper-3); }
.tcm-row[data-active='true'] { background: color-mix(in srgb, var(--tcm-accent) 9%, transparent); }
.tcm-row-dot { width: 7px; height: 7px; border-radius: 2px; flex: none; }
.tcm-row-title { flex: 1; min-width: 0; font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tcm-row-meta { font-size: 11px; color: var(--tcm-ink-3); flex: none; }
.tcm-row[data-hidden='true'] .tcm-row-title { opacity: .45; text-decoration: line-through; }

.tcm-doc-list { display: flex; flex-direction: column; gap: 2px; }
.tcm-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
.tcm-field-label { font-size: 11px; color: var(--tcm-ink-3); letter-spacing: .1em; }
.tcm-input, .tcm-textarea {
  width: 100%; border: 1px solid var(--tcm-line-2); border-radius: 9px;
  background: var(--tcm-paper); color: var(--tcm-ink); font: inherit; font-size: 13px; padding: 8px 10px;
}
.tcm-input:focus, .tcm-textarea:focus { outline: none; border-color: var(--tcm-accent-soft); box-shadow: 0 0 0 3px rgba(168, 51, 42, .1); }
.tcm-textarea { min-height: 420px; resize: vertical; font-family: var(--tcm-mono); font-size: 12.5px; line-height: 1.75; }

.tcm-editor { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 18px; align-items: start; }
.tcm-editor-pane { min-width: 0; }
.tcm-editor-preview {
  border: 1px solid var(--tcm-line); border-radius: 12px; background: var(--tcm-paper-2);
  padding: 22px 24px; max-height: 62vh; overflow: auto;
}
.tcm-editor-preview .tcm-prose { font-size: 15px; }
.tcm-dirty { width: 6px; height: 6px; border-radius: 50%; background: var(--tcm-accent); flex: none; }

.tcm-toast {
  position: fixed; left: 50%; bottom: 34px; transform: translateX(-50%);
  padding: 9px 16px; border-radius: 10px; font-size: 13px;
  background: var(--tcm-ink); color: var(--tcm-paper); box-shadow: var(--tcm-shadow); z-index: 60;
  animation: tcm-toast-in .18s ease;
}
.tcm-toast[data-kind='error'] { background: var(--tcm-accent); color: #fff; }
@keyframes tcm-toast-in { from { opacity: 0; transform: translate(-50%, 8px); } }

.tcm-loading { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 80px 0; color: var(--tcm-ink-3); font-size: 13px; }
.tcm-spinner {
  width: 14px; height: 14px; border-radius: 50%;
  border: 2px solid var(--tcm-line-2); border-top-color: var(--tcm-accent);
  animation: tcm-spin .8s linear infinite;
}
@keyframes tcm-spin { to { transform: rotate(360deg); } }

@media (max-width: 900px) {
  .tcm-toc { display: none; }
  .tcm-config { grid-template-columns: 1fr; }
  .tcm-editor { grid-template-columns: 1fr; }
  .tcm-top { flex-wrap: wrap; }
  .tcm-search { width: 100%; max-width: none; }
}
@media (prefers-reduced-motion: reduce) {
  .tcm-root *, .tcm-root *::before, .tcm-root *::after { animation: none !important; transition: none !important; }
}
`

let injected = false

/** 样式只注入一次；HMR 重新激活时复用同一节点。 */
export function installStyles(): void {
  if (injected || typeof document === 'undefined') return
  injected = true
  const style = document.createElement('style')
  style.dataset.dshPlugin = 'dsh-plugin-tcm-learning'
  style.textContent = CSS
  document.head.appendChild(style)
}

