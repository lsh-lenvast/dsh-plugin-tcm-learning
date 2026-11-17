window.__ModuleLoader__.load({
	id: "dsh-plugin-tcm-learning",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __export = (target, all) => {
		  for (var name in all)
		    __defProp(target, name, { get: all[name], enumerable: true });
		};
		var __copyProps = (to, from, except, desc) => {
		  if (from && typeof from === "object" || typeof from === "function") {
		    for (let key of __getOwnPropNames(from))
		      if (!__hasOwnProp.call(to, key) && key !== except)
		        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
		  }
		  return to;
		};
		var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

		// src/client/index.tsx
		var index_exports = {};
		__export(index_exports, {
		  apply: () => apply2,
		  inject: () => inject
		});
		module.exports = __toCommonJS(index_exports);
		var import_react2 = require("react");

		// src/client/app.tsx
		var import_react = require("react");

		// node_modules/.pnpm/marked@15.0.12/node_modules/marked/lib/marked.esm.js
		function _getDefaults() {
		  return {
		    async: false,
		    breaks: false,
		    extensions: null,
		    gfm: true,
		    hooks: null,
		    pedantic: false,
		    renderer: null,
		    silent: false,
		    tokenizer: null,
		    walkTokens: null
		  };
		}
		var _defaults = _getDefaults();
		function changeDefaults(newDefaults) {
		  _defaults = newDefaults;
		}
		var noopTest = { exec: () => null };
		function edit(regex, opt = "") {
		  let source = typeof regex === "string" ? regex : regex.source;
		  const obj = {
		    replace: (name, val) => {
		      let valSource = typeof val === "string" ? val : val.source;
		      valSource = valSource.replace(other.caret, "$1");
		      source = source.replace(name, valSource);
		      return obj;
		    },
		    getRegex: () => {
		      return new RegExp(source, opt);
		    }
		  };
		  return obj;
		}
		var other = {
		  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
		  outputLinkReplace: /\\([\[\]])/g,
		  indentCodeCompensation: /^(\s+)(?:```)/,
		  beginningSpace: /^\s+/,
		  endingHash: /#$/,
		  startingSpaceChar: /^ /,
		  endingSpaceChar: / $/,
		  nonSpaceChar: /[^ ]/,
		  newLineCharGlobal: /\n/g,
		  tabCharGlobal: /\t/g,
		  multipleSpaceGlobal: /\s+/g,
		  blankLine: /^[ \t]*$/,
		  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
		  blockquoteStart: /^ {0,3}>/,
		  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
		  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
		  listReplaceTabs: /^\t+/,
		  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
		  listIsTask: /^\[[ xX]\] /,
		  listReplaceTask: /^\[[ xX]\] +/,
		  anyLine: /\n.*\n/,
		  hrefBrackets: /^<(.*)>$/,
		  tableDelimiter: /[:|]/,
		  tableAlignChars: /^\||\| *$/g,
		  tableRowBlankLine: /\n[ \t]*$/,
		  tableAlignRight: /^ *-+: *$/,
		  tableAlignCenter: /^ *:-+: *$/,
		  tableAlignLeft: /^ *:-+ *$/,
		  startATag: /^<a /i,
		  endATag: /^<\/a>/i,
		  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
		  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
		  startAngleBracket: /^</,
		  endAngleBracket: />$/,
		  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
		  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
		  escapeTest: /[&<>"']/,
		  escapeReplace: /[&<>"']/g,
		  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
		  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
		  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
		  caret: /(^|[^\[])\^/g,
		  percentDecode: /%25/g,
		  findPipe: /\|/g,
		  splitPipe: / \|/,
		  slashPipe: /\\\|/g,
		  carriageReturn: /\r\n|\r/g,
		  spaceLine: /^ +$/gm,
		  notSpaceStart: /^\S*/,
		  endingNewline: /\n$/,
		  listItemRegex: (bull) => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
		  nextBulletRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
		  hrRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
		  fencesBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
		  headingBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
		  htmlBeginRegex: (indent) => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
		};
		var newline = /^(?:[ \t]*(?:\n|$))+/;
		var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
		var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
		var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
		var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
		var bullet = /(?:[*+-]|\d{1,9}[.)])/;
		var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
		var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
		var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
		var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
		var blockText = /^[^\n]+/;
		var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
		var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
		var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
		var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
		var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
		var html = edit(
		  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
		  "i"
		).replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
		var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
		var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
		var blockNormal = {
		  blockquote,
		  code: blockCode,
		  def,
		  fences,
		  heading,
		  hr,
		  html,
		  lheading,
		  list,
		  newline,
		  paragraph,
		  table: noopTest,
		  text: blockText
		};
		var gfmTable = edit(
		  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
		).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
		var blockGfm = {
		  ...blockNormal,
		  lheading: lheadingGfm,
		  table: gfmTable,
		  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
		};
		var blockPedantic = {
		  ...blockNormal,
		  html: edit(
		    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
		  ).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
		  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		  heading: /^(#{1,6})(.*)(?:\n+|$)/,
		  fences: noopTest,
		  // fences not supported
		  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
		};
		var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
		var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
		var br = /^( {2,}|\\)\n(?!\s*$)/;
		var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
		var _punctuation = /[\p{P}\p{S}]/u;
		var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
		var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
		var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
		var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
		var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
		var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
		var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
		var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
		var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
		var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
		var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
		var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
		var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
		var emStrongRDelimUnd = edit(
		  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
		  "gu"
		).replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
		var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
		var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
		var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
		var tag = edit(
		  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
		).replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
		var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
		var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
		var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
		var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
		var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
		var inlineNormal = {
		  _backpedal: noopTest,
		  // only used for GFM url
		  anyPunctuation,
		  autolink,
		  blockSkip,
		  br,
		  code: inlineCode,
		  del: noopTest,
		  emStrongLDelim,
		  emStrongRDelimAst,
		  emStrongRDelimUnd,
		  escape,
		  link,
		  nolink,
		  punctuation,
		  reflink,
		  reflinkSearch,
		  tag,
		  text: inlineText,
		  url: noopTest
		};
		var inlinePedantic = {
		  ...inlineNormal,
		  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
		  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
		};
		var inlineGfm = {
		  ...inlineNormal,
		  emStrongRDelimAst: emStrongRDelimAstGfm,
		  emStrongLDelim: emStrongLDelimGfm,
		  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
		  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
		  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
		};
		var inlineBreaks = {
		  ...inlineGfm,
		  br: edit(br).replace("{2,}", "*").getRegex(),
		  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
		};
		var block = {
		  normal: blockNormal,
		  gfm: blockGfm,
		  pedantic: blockPedantic
		};
		var inline = {
		  normal: inlineNormal,
		  gfm: inlineGfm,
		  breaks: inlineBreaks,
		  pedantic: inlinePedantic
		};
		var escapeReplacements = {
		  "&": "&amp;",
		  "<": "&lt;",
		  ">": "&gt;",
		  '"': "&quot;",
		  "'": "&#39;"
		};
		var getEscapeReplacement = (ch) => escapeReplacements[ch];
		function escape2(html22, encode) {
		  if (encode) {
		    if (other.escapeTest.test(html22)) {
		      return html22.replace(other.escapeReplace, getEscapeReplacement);
		    }
		  } else {
		    if (other.escapeTestNoEncode.test(html22)) {
		      return html22.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
		    }
		  }
		  return html22;
		}
		function cleanUrl(href) {
		  try {
		    href = encodeURI(href).replace(other.percentDecode, "%");
		  } catch {
		    return null;
		  }
		  return href;
		}
		function splitCells(tableRow, count) {
		  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
		    let escaped = false;
		    let curr = offset;
		    while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
		    if (escaped) {
		      return "|";
		    } else {
		      return " |";
		    }
		  }), cells = row.split(other.splitPipe);
		  let i = 0;
		  if (!cells[0].trim()) {
		    cells.shift();
		  }
		  if (cells.length > 0 && !cells.at(-1)?.trim()) {
		    cells.pop();
		  }
		  if (count) {
		    if (cells.length > count) {
		      cells.splice(count);
		    } else {
		      while (cells.length < count) cells.push("");
		    }
		  }
		  for (; i < cells.length; i++) {
		    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
		  }
		  return cells;
		}
		function rtrim(str, c, invert) {
		  const l = str.length;
		  if (l === 0) {
		    return "";
		  }
		  let suffLen = 0;
		  while (suffLen < l) {
		    const currChar = str.charAt(l - suffLen - 1);
		    if (currChar === c && !invert) {
		      suffLen++;
		    } else if (currChar !== c && invert) {
		      suffLen++;
		    } else {
		      break;
		    }
		  }
		  return str.slice(0, l - suffLen);
		}
		function findClosingBracket(str, b) {
		  if (str.indexOf(b[1]) === -1) {
		    return -1;
		  }
		  let level = 0;
		  for (let i = 0; i < str.length; i++) {
		    if (str[i] === "\\") {
		      i++;
		    } else if (str[i] === b[0]) {
		      level++;
		    } else if (str[i] === b[1]) {
		      level--;
		      if (level < 0) {
		        return i;
		      }
		    }
		  }
		  if (level > 0) {
		    return -2;
		  }
		  return -1;
		}
		function outputLink(cap, link2, raw, lexer2, rules) {
		  const href = link2.href;
		  const title = link2.title || null;
		  const text2 = cap[1].replace(rules.other.outputLinkReplace, "$1");
		  lexer2.state.inLink = true;
		  const token = {
		    type: cap[0].charAt(0) === "!" ? "image" : "link",
		    raw,
		    href,
		    title,
		    text: text2,
		    tokens: lexer2.inlineTokens(text2)
		  };
		  lexer2.state.inLink = false;
		  return token;
		}
		function indentCodeCompensation(raw, text2, rules) {
		  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
		  if (matchIndentToCode === null) {
		    return text2;
		  }
		  const indentToCode = matchIndentToCode[1];
		  return text2.split("\n").map((node) => {
		    const matchIndentInNode = node.match(rules.other.beginningSpace);
		    if (matchIndentInNode === null) {
		      return node;
		    }
		    const [indentInNode] = matchIndentInNode;
		    if (indentInNode.length >= indentToCode.length) {
		      return node.slice(indentToCode.length);
		    }
		    return node;
		  }).join("\n");
		}
		var _Tokenizer = class {
		  options;
		  rules;
		  // set by the lexer
		  lexer;
		  // set by the lexer
		  constructor(options2) {
		    this.options = options2 || _defaults;
		  }
		  space(src) {
		    const cap = this.rules.block.newline.exec(src);
		    if (cap && cap[0].length > 0) {
		      return {
		        type: "space",
		        raw: cap[0]
		      };
		    }
		  }
		  code(src) {
		    const cap = this.rules.block.code.exec(src);
		    if (cap) {
		      const text2 = cap[0].replace(this.rules.other.codeRemoveIndent, "");
		      return {
		        type: "code",
		        raw: cap[0],
		        codeBlockStyle: "indented",
		        text: !this.options.pedantic ? rtrim(text2, "\n") : text2
		      };
		    }
		  }
		  fences(src) {
		    const cap = this.rules.block.fences.exec(src);
		    if (cap) {
		      const raw = cap[0];
		      const text2 = indentCodeCompensation(raw, cap[3] || "", this.rules);
		      return {
		        type: "code",
		        raw,
		        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
		        text: text2
		      };
		    }
		  }
		  heading(src) {
		    const cap = this.rules.block.heading.exec(src);
		    if (cap) {
		      let text2 = cap[2].trim();
		      if (this.rules.other.endingHash.test(text2)) {
		        const trimmed = rtrim(text2, "#");
		        if (this.options.pedantic) {
		          text2 = trimmed.trim();
		        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
		          text2 = trimmed.trim();
		        }
		      }
		      return {
		        type: "heading",
		        raw: cap[0],
		        depth: cap[1].length,
		        text: text2,
		        tokens: this.lexer.inline(text2)
		      };
		    }
		  }
		  hr(src) {
		    const cap = this.rules.block.hr.exec(src);
		    if (cap) {
		      return {
		        type: "hr",
		        raw: rtrim(cap[0], "\n")
		      };
		    }
		  }
		  blockquote(src) {
		    const cap = this.rules.block.blockquote.exec(src);
		    if (cap) {
		      let lines = rtrim(cap[0], "\n").split("\n");
		      let raw = "";
		      let text2 = "";
		      const tokens = [];
		      while (lines.length > 0) {
		        let inBlockquote = false;
		        const currentLines = [];
		        let i;
		        for (i = 0; i < lines.length; i++) {
		          if (this.rules.other.blockquoteStart.test(lines[i])) {
		            currentLines.push(lines[i]);
		            inBlockquote = true;
		          } else if (!inBlockquote) {
		            currentLines.push(lines[i]);
		          } else {
		            break;
		          }
		        }
		        lines = lines.slice(i);
		        const currentRaw = currentLines.join("\n");
		        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
		        raw = raw ? `${raw}
		${currentRaw}` : currentRaw;
		        text2 = text2 ? `${text2}
		${currentText}` : currentText;
		        const top = this.lexer.state.top;
		        this.lexer.state.top = true;
		        this.lexer.blockTokens(currentText, tokens, true);
		        this.lexer.state.top = top;
		        if (lines.length === 0) {
		          break;
		        }
		        const lastToken = tokens.at(-1);
		        if (lastToken?.type === "code") {
		          break;
		        } else if (lastToken?.type === "blockquote") {
		          const oldToken = lastToken;
		          const newText = oldToken.raw + "\n" + lines.join("\n");
		          const newToken = this.blockquote(newText);
		          tokens[tokens.length - 1] = newToken;
		          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
		          text2 = text2.substring(0, text2.length - oldToken.text.length) + newToken.text;
		          break;
		        } else if (lastToken?.type === "list") {
		          const oldToken = lastToken;
		          const newText = oldToken.raw + "\n" + lines.join("\n");
		          const newToken = this.list(newText);
		          tokens[tokens.length - 1] = newToken;
		          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
		          text2 = text2.substring(0, text2.length - oldToken.raw.length) + newToken.raw;
		          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
		          continue;
		        }
		      }
		      return {
		        type: "blockquote",
		        raw,
		        tokens,
		        text: text2
		      };
		    }
		  }
		  list(src) {
		    let cap = this.rules.block.list.exec(src);
		    if (cap) {
		      let bull = cap[1].trim();
		      const isordered = bull.length > 1;
		      const list2 = {
		        type: "list",
		        raw: "",
		        ordered: isordered,
		        start: isordered ? +bull.slice(0, -1) : "",
		        loose: false,
		        items: []
		      };
		      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
		      if (this.options.pedantic) {
		        bull = isordered ? bull : "[*+-]";
		      }
		      const itemRegex = this.rules.other.listItemRegex(bull);
		      let endsWithBlankLine = false;
		      while (src) {
		        let endEarly = false;
		        let raw = "";
		        let itemContents = "";
		        if (!(cap = itemRegex.exec(src))) {
		          break;
		        }
		        if (this.rules.block.hr.test(src)) {
		          break;
		        }
		        raw = cap[0];
		        src = src.substring(raw.length);
		        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (t) => " ".repeat(3 * t.length));
		        let nextLine = src.split("\n", 1)[0];
		        let blankLine = !line.trim();
		        let indent = 0;
		        if (this.options.pedantic) {
		          indent = 2;
		          itemContents = line.trimStart();
		        } else if (blankLine) {
		          indent = cap[1].length + 1;
		        } else {
		          indent = cap[2].search(this.rules.other.nonSpaceChar);
		          indent = indent > 4 ? 1 : indent;
		          itemContents = line.slice(indent);
		          indent += cap[1].length;
		        }
		        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
		          raw += nextLine + "\n";
		          src = src.substring(nextLine.length + 1);
		          endEarly = true;
		        }
		        if (!endEarly) {
		          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
		          const hrRegex = this.rules.other.hrRegex(indent);
		          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
		          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
		          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
		          while (src) {
		            const rawLine = src.split("\n", 1)[0];
		            let nextLineWithoutTabs;
		            nextLine = rawLine;
		            if (this.options.pedantic) {
		              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
		              nextLineWithoutTabs = nextLine;
		            } else {
		              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
		            }
		            if (fencesBeginRegex.test(nextLine)) {
		              break;
		            }
		            if (headingBeginRegex.test(nextLine)) {
		              break;
		            }
		            if (htmlBeginRegex.test(nextLine)) {
		              break;
		            }
		            if (nextBulletRegex.test(nextLine)) {
		              break;
		            }
		            if (hrRegex.test(nextLine)) {
		              break;
		            }
		            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
		              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
		            } else {
		              if (blankLine) {
		                break;
		              }
		              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
		                break;
		              }
		              if (fencesBeginRegex.test(line)) {
		                break;
		              }
		              if (headingBeginRegex.test(line)) {
		                break;
		              }
		              if (hrRegex.test(line)) {
		                break;
		              }
		              itemContents += "\n" + nextLine;
		            }
		            if (!blankLine && !nextLine.trim()) {
		              blankLine = true;
		            }
		            raw += rawLine + "\n";
		            src = src.substring(rawLine.length + 1);
		            line = nextLineWithoutTabs.slice(indent);
		          }
		        }
		        if (!list2.loose) {
		          if (endsWithBlankLine) {
		            list2.loose = true;
		          } else if (this.rules.other.doubleBlankLine.test(raw)) {
		            endsWithBlankLine = true;
		          }
		        }
		        let istask = null;
		        let ischecked;
		        if (this.options.gfm) {
		          istask = this.rules.other.listIsTask.exec(itemContents);
		          if (istask) {
		            ischecked = istask[0] !== "[ ] ";
		            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
		          }
		        }
		        list2.items.push({
		          type: "list_item",
		          raw,
		          task: !!istask,
		          checked: ischecked,
		          loose: false,
		          text: itemContents,
		          tokens: []
		        });
		        list2.raw += raw;
		      }
		      const lastItem = list2.items.at(-1);
		      if (lastItem) {
		        lastItem.raw = lastItem.raw.trimEnd();
		        lastItem.text = lastItem.text.trimEnd();
		      } else {
		        return;
		      }
		      list2.raw = list2.raw.trimEnd();
		      for (let i = 0; i < list2.items.length; i++) {
		        this.lexer.state.top = false;
		        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
		        if (!list2.loose) {
		          const spacers = list2.items[i].tokens.filter((t) => t.type === "space");
		          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => this.rules.other.anyLine.test(t.raw));
		          list2.loose = hasMultipleLineBreaks;
		        }
		      }
		      if (list2.loose) {
		        for (let i = 0; i < list2.items.length; i++) {
		          list2.items[i].loose = true;
		        }
		      }
		      return list2;
		    }
		  }
		  html(src) {
		    const cap = this.rules.block.html.exec(src);
		    if (cap) {
		      const token = {
		        type: "html",
		        block: true,
		        raw: cap[0],
		        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
		        text: cap[0]
		      };
		      return token;
		    }
		  }
		  def(src) {
		    const cap = this.rules.block.def.exec(src);
		    if (cap) {
		      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
		      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
		      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
		      return {
		        type: "def",
		        tag: tag2,
		        raw: cap[0],
		        href,
		        title
		      };
		    }
		  }
		  table(src) {
		    const cap = this.rules.block.table.exec(src);
		    if (!cap) {
		      return;
		    }
		    if (!this.rules.other.tableDelimiter.test(cap[2])) {
		      return;
		    }
		    const headers = splitCells(cap[1]);
		    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
		    const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
		    const item = {
		      type: "table",
		      raw: cap[0],
		      header: [],
		      align: [],
		      rows: []
		    };
		    if (headers.length !== aligns.length) {
		      return;
		    }
		    for (const align of aligns) {
		      if (this.rules.other.tableAlignRight.test(align)) {
		        item.align.push("right");
		      } else if (this.rules.other.tableAlignCenter.test(align)) {
		        item.align.push("center");
		      } else if (this.rules.other.tableAlignLeft.test(align)) {
		        item.align.push("left");
		      } else {
		        item.align.push(null);
		      }
		    }
		    for (let i = 0; i < headers.length; i++) {
		      item.header.push({
		        text: headers[i],
		        tokens: this.lexer.inline(headers[i]),
		        header: true,
		        align: item.align[i]
		      });
		    }
		    for (const row of rows) {
		      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
		        return {
		          text: cell,
		          tokens: this.lexer.inline(cell),
		          header: false,
		          align: item.align[i]
		        };
		      }));
		    }
		    return item;
		  }
		  lheading(src) {
		    const cap = this.rules.block.lheading.exec(src);
		    if (cap) {
		      return {
		        type: "heading",
		        raw: cap[0],
		        depth: cap[2].charAt(0) === "=" ? 1 : 2,
		        text: cap[1],
		        tokens: this.lexer.inline(cap[1])
		      };
		    }
		  }
		  paragraph(src) {
		    const cap = this.rules.block.paragraph.exec(src);
		    if (cap) {
		      const text2 = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
		      return {
		        type: "paragraph",
		        raw: cap[0],
		        text: text2,
		        tokens: this.lexer.inline(text2)
		      };
		    }
		  }
		  text(src) {
		    const cap = this.rules.block.text.exec(src);
		    if (cap) {
		      return {
		        type: "text",
		        raw: cap[0],
		        text: cap[0],
		        tokens: this.lexer.inline(cap[0])
		      };
		    }
		  }
		  escape(src) {
		    const cap = this.rules.inline.escape.exec(src);
		    if (cap) {
		      return {
		        type: "escape",
		        raw: cap[0],
		        text: cap[1]
		      };
		    }
		  }
		  tag(src) {
		    const cap = this.rules.inline.tag.exec(src);
		    if (cap) {
		      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
		        this.lexer.state.inLink = true;
		      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
		        this.lexer.state.inLink = false;
		      }
		      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
		        this.lexer.state.inRawBlock = true;
		      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
		        this.lexer.state.inRawBlock = false;
		      }
		      return {
		        type: "html",
		        raw: cap[0],
		        inLink: this.lexer.state.inLink,
		        inRawBlock: this.lexer.state.inRawBlock,
		        block: false,
		        text: cap[0]
		      };
		    }
		  }
		  link(src) {
		    const cap = this.rules.inline.link.exec(src);
		    if (cap) {
		      const trimmedUrl = cap[2].trim();
		      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
		        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
		          return;
		        }
		        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
		        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
		          return;
		        }
		      } else {
		        const lastParenIndex = findClosingBracket(cap[2], "()");
		        if (lastParenIndex === -2) {
		          return;
		        }
		        if (lastParenIndex > -1) {
		          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
		          const linkLen = start + cap[1].length + lastParenIndex;
		          cap[2] = cap[2].substring(0, lastParenIndex);
		          cap[0] = cap[0].substring(0, linkLen).trim();
		          cap[3] = "";
		        }
		      }
		      let href = cap[2];
		      let title = "";
		      if (this.options.pedantic) {
		        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
		        if (link2) {
		          href = link2[1];
		          title = link2[3];
		        }
		      } else {
		        title = cap[3] ? cap[3].slice(1, -1) : "";
		      }
		      href = href.trim();
		      if (this.rules.other.startAngleBracket.test(href)) {
		        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
		          href = href.slice(1);
		        } else {
		          href = href.slice(1, -1);
		        }
		      }
		      return outputLink(cap, {
		        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
		        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
		      }, cap[0], this.lexer, this.rules);
		    }
		  }
		  reflink(src, links) {
		    let cap;
		    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
		      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
		      const link2 = links[linkString.toLowerCase()];
		      if (!link2) {
		        const text2 = cap[0].charAt(0);
		        return {
		          type: "text",
		          raw: text2,
		          text: text2
		        };
		      }
		      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
		    }
		  }
		  emStrong(src, maskedSrc, prevChar = "") {
		    let match = this.rules.inline.emStrongLDelim.exec(src);
		    if (!match) return;
		    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
		    const nextChar = match[1] || match[2] || "";
		    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
		      const lLength = [...match[0]].length - 1;
		      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
		      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
		      endReg.lastIndex = 0;
		      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
		      while ((match = endReg.exec(maskedSrc)) != null) {
		        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
		        if (!rDelim) continue;
		        rLength = [...rDelim].length;
		        if (match[3] || match[4]) {
		          delimTotal += rLength;
		          continue;
		        } else if (match[5] || match[6]) {
		          if (lLength % 3 && !((lLength + rLength) % 3)) {
		            midDelimTotal += rLength;
		            continue;
		          }
		        }
		        delimTotal -= rLength;
		        if (delimTotal > 0) continue;
		        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
		        const lastCharLength = [...match[0]][0].length;
		        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
		        if (Math.min(lLength, rLength) % 2) {
		          const text22 = raw.slice(1, -1);
		          return {
		            type: "em",
		            raw,
		            text: text22,
		            tokens: this.lexer.inlineTokens(text22)
		          };
		        }
		        const text2 = raw.slice(2, -2);
		        return {
		          type: "strong",
		          raw,
		          text: text2,
		          tokens: this.lexer.inlineTokens(text2)
		        };
		      }
		    }
		  }
		  codespan(src) {
		    const cap = this.rules.inline.code.exec(src);
		    if (cap) {
		      let text2 = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
		      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text2);
		      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text2) && this.rules.other.endingSpaceChar.test(text2);
		      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
		        text2 = text2.substring(1, text2.length - 1);
		      }
		      return {
		        type: "codespan",
		        raw: cap[0],
		        text: text2
		      };
		    }
		  }
		  br(src) {
		    const cap = this.rules.inline.br.exec(src);
		    if (cap) {
		      return {
		        type: "br",
		        raw: cap[0]
		      };
		    }
		  }
		  del(src) {
		    const cap = this.rules.inline.del.exec(src);
		    if (cap) {
		      return {
		        type: "del",
		        raw: cap[0],
		        text: cap[2],
		        tokens: this.lexer.inlineTokens(cap[2])
		      };
		    }
		  }
		  autolink(src) {
		    const cap = this.rules.inline.autolink.exec(src);
		    if (cap) {
		      let text2, href;
		      if (cap[2] === "@") {
		        text2 = cap[1];
		        href = "mailto:" + text2;
		      } else {
		        text2 = cap[1];
		        href = text2;
		      }
		      return {
		        type: "link",
		        raw: cap[0],
		        text: text2,
		        href,
		        tokens: [
		          {
		            type: "text",
		            raw: text2,
		            text: text2
		          }
		        ]
		      };
		    }
		  }
		  url(src) {
		    let cap;
		    if (cap = this.rules.inline.url.exec(src)) {
		      let text2, href;
		      if (cap[2] === "@") {
		        text2 = cap[0];
		        href = "mailto:" + text2;
		      } else {
		        let prevCapZero;
		        do {
		          prevCapZero = cap[0];
		          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
		        } while (prevCapZero !== cap[0]);
		        text2 = cap[0];
		        if (cap[1] === "www.") {
		          href = "http://" + cap[0];
		        } else {
		          href = cap[0];
		        }
		      }
		      return {
		        type: "link",
		        raw: cap[0],
		        text: text2,
		        href,
		        tokens: [
		          {
		            type: "text",
		            raw: text2,
		            text: text2
		          }
		        ]
		      };
		    }
		  }
		  inlineText(src) {
		    const cap = this.rules.inline.text.exec(src);
		    if (cap) {
		      const escaped = this.lexer.state.inRawBlock;
		      return {
		        type: "text",
		        raw: cap[0],
		        text: cap[0],
		        escaped
		      };
		    }
		  }
		};
		var _Lexer = class __Lexer {
		  tokens;
		  options;
		  state;
		  tokenizer;
		  inlineQueue;
		  constructor(options2) {
		    this.tokens = [];
		    this.tokens.links = /* @__PURE__ */ Object.create(null);
		    this.options = options2 || _defaults;
		    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
		    this.tokenizer = this.options.tokenizer;
		    this.tokenizer.options = this.options;
		    this.tokenizer.lexer = this;
		    this.inlineQueue = [];
		    this.state = {
		      inLink: false,
		      inRawBlock: false,
		      top: true
		    };
		    const rules = {
		      other,
		      block: block.normal,
		      inline: inline.normal
		    };
		    if (this.options.pedantic) {
		      rules.block = block.pedantic;
		      rules.inline = inline.pedantic;
		    } else if (this.options.gfm) {
		      rules.block = block.gfm;
		      if (this.options.breaks) {
		        rules.inline = inline.breaks;
		      } else {
		        rules.inline = inline.gfm;
		      }
		    }
		    this.tokenizer.rules = rules;
		  }
		  /**
		   * Expose Rules
		   */
		  static get rules() {
		    return {
		      block,
		      inline
		    };
		  }
		  /**
		   * Static Lex Method
		   */
		  static lex(src, options2) {
		    const lexer2 = new __Lexer(options2);
		    return lexer2.lex(src);
		  }
		  /**
		   * Static Lex Inline Method
		   */
		  static lexInline(src, options2) {
		    const lexer2 = new __Lexer(options2);
		    return lexer2.inlineTokens(src);
		  }
		  /**
		   * Preprocessing
		   */
		  lex(src) {
		    src = src.replace(other.carriageReturn, "\n");
		    this.blockTokens(src, this.tokens);
		    for (let i = 0; i < this.inlineQueue.length; i++) {
		      const next = this.inlineQueue[i];
		      this.inlineTokens(next.src, next.tokens);
		    }
		    this.inlineQueue = [];
		    return this.tokens;
		  }
		  blockTokens(src, tokens = [], lastParagraphClipped = false) {
		    if (this.options.pedantic) {
		      src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
		    }
		    while (src) {
		      let token;
		      if (this.options.extensions?.block?.some((extTokenizer) => {
		        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
		          src = src.substring(token.raw.length);
		          tokens.push(token);
		          return true;
		        }
		        return false;
		      })) {
		        continue;
		      }
		      if (token = this.tokenizer.space(src)) {
		        src = src.substring(token.raw.length);
		        const lastToken = tokens.at(-1);
		        if (token.raw.length === 1 && lastToken !== void 0) {
		          lastToken.raw += "\n";
		        } else {
		          tokens.push(token);
		        }
		        continue;
		      }
		      if (token = this.tokenizer.code(src)) {
		        src = src.substring(token.raw.length);
		        const lastToken = tokens.at(-1);
		        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
		          lastToken.raw += "\n" + token.raw;
		          lastToken.text += "\n" + token.text;
		          this.inlineQueue.at(-1).src = lastToken.text;
		        } else {
		          tokens.push(token);
		        }
		        continue;
		      }
		      if (token = this.tokenizer.fences(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.heading(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.hr(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.blockquote(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.list(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.html(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.def(src)) {
		        src = src.substring(token.raw.length);
		        const lastToken = tokens.at(-1);
		        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
		          lastToken.raw += "\n" + token.raw;
		          lastToken.text += "\n" + token.raw;
		          this.inlineQueue.at(-1).src = lastToken.text;
		        } else if (!this.tokens.links[token.tag]) {
		          this.tokens.links[token.tag] = {
		            href: token.href,
		            title: token.title
		          };
		        }
		        continue;
		      }
		      if (token = this.tokenizer.table(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.lheading(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      let cutSrc = src;
		      if (this.options.extensions?.startBlock) {
		        let startIndex = Infinity;
		        const tempSrc = src.slice(1);
		        let tempStart;
		        this.options.extensions.startBlock.forEach((getStartIndex) => {
		          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
		          if (typeof tempStart === "number" && tempStart >= 0) {
		            startIndex = Math.min(startIndex, tempStart);
		          }
		        });
		        if (startIndex < Infinity && startIndex >= 0) {
		          cutSrc = src.substring(0, startIndex + 1);
		        }
		      }
		      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
		        const lastToken = tokens.at(-1);
		        if (lastParagraphClipped && lastToken?.type === "paragraph") {
		          lastToken.raw += "\n" + token.raw;
		          lastToken.text += "\n" + token.text;
		          this.inlineQueue.pop();
		          this.inlineQueue.at(-1).src = lastToken.text;
		        } else {
		          tokens.push(token);
		        }
		        lastParagraphClipped = cutSrc.length !== src.length;
		        src = src.substring(token.raw.length);
		        continue;
		      }
		      if (token = this.tokenizer.text(src)) {
		        src = src.substring(token.raw.length);
		        const lastToken = tokens.at(-1);
		        if (lastToken?.type === "text") {
		          lastToken.raw += "\n" + token.raw;
		          lastToken.text += "\n" + token.text;
		          this.inlineQueue.pop();
		          this.inlineQueue.at(-1).src = lastToken.text;
		        } else {
		          tokens.push(token);
		        }
		        continue;
		      }
		      if (src) {
		        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
		        if (this.options.silent) {
		          console.error(errMsg);
		          break;
		        } else {
		          throw new Error(errMsg);
		        }
		      }
		    }
		    this.state.top = true;
		    return tokens;
		  }
		  inline(src, tokens = []) {
		    this.inlineQueue.push({ src, tokens });
		    return tokens;
		  }
		  /**
		   * Lexing/Compiling
		   */
		  inlineTokens(src, tokens = []) {
		    let maskedSrc = src;
		    let match = null;
		    if (this.tokens.links) {
		      const links = Object.keys(this.tokens.links);
		      if (links.length > 0) {
		        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
		          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
		            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
		          }
		        }
		      }
		    }
		    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
		      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		    }
		    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
		      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		    }
		    let keepPrevChar = false;
		    let prevChar = "";
		    while (src) {
		      if (!keepPrevChar) {
		        prevChar = "";
		      }
		      keepPrevChar = false;
		      let token;
		      if (this.options.extensions?.inline?.some((extTokenizer) => {
		        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
		          src = src.substring(token.raw.length);
		          tokens.push(token);
		          return true;
		        }
		        return false;
		      })) {
		        continue;
		      }
		      if (token = this.tokenizer.escape(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.tag(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.link(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
		        src = src.substring(token.raw.length);
		        const lastToken = tokens.at(-1);
		        if (token.type === "text" && lastToken?.type === "text") {
		          lastToken.raw += token.raw;
		          lastToken.text += token.text;
		        } else {
		          tokens.push(token);
		        }
		        continue;
		      }
		      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.codespan(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.br(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.del(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (token = this.tokenizer.autolink(src)) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
		        src = src.substring(token.raw.length);
		        tokens.push(token);
		        continue;
		      }
		      let cutSrc = src;
		      if (this.options.extensions?.startInline) {
		        let startIndex = Infinity;
		        const tempSrc = src.slice(1);
		        let tempStart;
		        this.options.extensions.startInline.forEach((getStartIndex) => {
		          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
		          if (typeof tempStart === "number" && tempStart >= 0) {
		            startIndex = Math.min(startIndex, tempStart);
		          }
		        });
		        if (startIndex < Infinity && startIndex >= 0) {
		          cutSrc = src.substring(0, startIndex + 1);
		        }
		      }
		      if (token = this.tokenizer.inlineText(cutSrc)) {
		        src = src.substring(token.raw.length);
		        if (token.raw.slice(-1) !== "_") {
		          prevChar = token.raw.slice(-1);
		        }
		        keepPrevChar = true;
		        const lastToken = tokens.at(-1);
		        if (lastToken?.type === "text") {
		          lastToken.raw += token.raw;
		          lastToken.text += token.text;
		        } else {
		          tokens.push(token);
		        }
		        continue;
		      }
		      if (src) {
		        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
		        if (this.options.silent) {
		          console.error(errMsg);
		          break;
		        } else {
		          throw new Error(errMsg);
		        }
		      }
		    }
		    return tokens;
		  }
		};
		var _Renderer = class {
		  options;
		  parser;
		  // set by the parser
		  constructor(options2) {
		    this.options = options2 || _defaults;
		  }
		  space(token) {
		    return "";
		  }
		  code({ text: text2, lang, escaped }) {
		    const langString = (lang || "").match(other.notSpaceStart)?.[0];
		    const code = text2.replace(other.endingNewline, "") + "\n";
		    if (!langString) {
		      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
		    }
		    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
		  }
		  blockquote({ tokens }) {
		    const body = this.parser.parse(tokens);
		    return `<blockquote>
		${body}</blockquote>
		`;
		  }
		  html({ text: text2 }) {
		    return text2;
		  }
		  heading({ tokens, depth }) {
		    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
		`;
		  }
		  hr(token) {
		    return "<hr>\n";
		  }
		  list(token) {
		    const ordered = token.ordered;
		    const start = token.start;
		    let body = "";
		    for (let j = 0; j < token.items.length; j++) {
		      const item = token.items[j];
		      body += this.listitem(item);
		    }
		    const type = ordered ? "ol" : "ul";
		    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
		    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
		  }
		  listitem(item) {
		    let itemBody = "";
		    if (item.task) {
		      const checkbox = this.checkbox({ checked: !!item.checked });
		      if (item.loose) {
		        if (item.tokens[0]?.type === "paragraph") {
		          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
		          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
		            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
		            item.tokens[0].tokens[0].escaped = true;
		          }
		        } else {
		          item.tokens.unshift({
		            type: "text",
		            raw: checkbox + " ",
		            text: checkbox + " ",
		            escaped: true
		          });
		        }
		      } else {
		        itemBody += checkbox + " ";
		      }
		    }
		    itemBody += this.parser.parse(item.tokens, !!item.loose);
		    return `<li>${itemBody}</li>
		`;
		  }
		  checkbox({ checked }) {
		    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
		  }
		  paragraph({ tokens }) {
		    return `<p>${this.parser.parseInline(tokens)}</p>
		`;
		  }
		  table(token) {
		    let header = "";
		    let cell = "";
		    for (let j = 0; j < token.header.length; j++) {
		      cell += this.tablecell(token.header[j]);
		    }
		    header += this.tablerow({ text: cell });
		    let body = "";
		    for (let j = 0; j < token.rows.length; j++) {
		      const row = token.rows[j];
		      cell = "";
		      for (let k = 0; k < row.length; k++) {
		        cell += this.tablecell(row[k]);
		      }
		      body += this.tablerow({ text: cell });
		    }
		    if (body) body = `<tbody>${body}</tbody>`;
		    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
		  }
		  tablerow({ text: text2 }) {
		    return `<tr>
		${text2}</tr>
		`;
		  }
		  tablecell(token) {
		    const content = this.parser.parseInline(token.tokens);
		    const type = token.header ? "th" : "td";
		    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
		    return tag2 + content + `</${type}>
		`;
		  }
		  /**
		   * span level renderer
		   */
		  strong({ tokens }) {
		    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
		  }
		  em({ tokens }) {
		    return `<em>${this.parser.parseInline(tokens)}</em>`;
		  }
		  codespan({ text: text2 }) {
		    return `<code>${escape2(text2, true)}</code>`;
		  }
		  br(token) {
		    return "<br>";
		  }
		  del({ tokens }) {
		    return `<del>${this.parser.parseInline(tokens)}</del>`;
		  }
		  link({ href, title, tokens }) {
		    const text2 = this.parser.parseInline(tokens);
		    const cleanHref = cleanUrl(href);
		    if (cleanHref === null) {
		      return text2;
		    }
		    href = cleanHref;
		    let out = '<a href="' + href + '"';
		    if (title) {
		      out += ' title="' + escape2(title) + '"';
		    }
		    out += ">" + text2 + "</a>";
		    return out;
		  }
		  image({ href, title, text: text2, tokens }) {
		    if (tokens) {
		      text2 = this.parser.parseInline(tokens, this.parser.textRenderer);
		    }
		    const cleanHref = cleanUrl(href);
		    if (cleanHref === null) {
		      return escape2(text2);
		    }
		    href = cleanHref;
		    let out = `<img src="${href}" alt="${text2}"`;
		    if (title) {
		      out += ` title="${escape2(title)}"`;
		    }
		    out += ">";
		    return out;
		  }
		  text(token) {
		    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
		  }
		};
		var _TextRenderer = class {
		  // no need for block level renderers
		  strong({ text: text2 }) {
		    return text2;
		  }
		  em({ text: text2 }) {
		    return text2;
		  }
		  codespan({ text: text2 }) {
		    return text2;
		  }
		  del({ text: text2 }) {
		    return text2;
		  }
		  html({ text: text2 }) {
		    return text2;
		  }
		  text({ text: text2 }) {
		    return text2;
		  }
		  link({ text: text2 }) {
		    return "" + text2;
		  }
		  image({ text: text2 }) {
		    return "" + text2;
		  }
		  br() {
		    return "";
		  }
		};
		var _Parser = class __Parser {
		  options;
		  renderer;
		  textRenderer;
		  constructor(options2) {
		    this.options = options2 || _defaults;
		    this.options.renderer = this.options.renderer || new _Renderer();
		    this.renderer = this.options.renderer;
		    this.renderer.options = this.options;
		    this.renderer.parser = this;
		    this.textRenderer = new _TextRenderer();
		  }
		  /**
		   * Static Parse Method
		   */
		  static parse(tokens, options2) {
		    const parser2 = new __Parser(options2);
		    return parser2.parse(tokens);
		  }
		  /**
		   * Static Parse Inline Method
		   */
		  static parseInline(tokens, options2) {
		    const parser2 = new __Parser(options2);
		    return parser2.parseInline(tokens);
		  }
		  /**
		   * Parse Loop
		   */
		  parse(tokens, top = true) {
		    let out = "";
		    for (let i = 0; i < tokens.length; i++) {
		      const anyToken = tokens[i];
		      if (this.options.extensions?.renderers?.[anyToken.type]) {
		        const genericToken = anyToken;
		        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
		        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
		          out += ret || "";
		          continue;
		        }
		      }
		      const token = anyToken;
		      switch (token.type) {
		        case "space": {
		          out += this.renderer.space(token);
		          continue;
		        }
		        case "hr": {
		          out += this.renderer.hr(token);
		          continue;
		        }
		        case "heading": {
		          out += this.renderer.heading(token);
		          continue;
		        }
		        case "code": {
		          out += this.renderer.code(token);
		          continue;
		        }
		        case "table": {
		          out += this.renderer.table(token);
		          continue;
		        }
		        case "blockquote": {
		          out += this.renderer.blockquote(token);
		          continue;
		        }
		        case "list": {
		          out += this.renderer.list(token);
		          continue;
		        }
		        case "html": {
		          out += this.renderer.html(token);
		          continue;
		        }
		        case "paragraph": {
		          out += this.renderer.paragraph(token);
		          continue;
		        }
		        case "text": {
		          let textToken = token;
		          let body = this.renderer.text(textToken);
		          while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
		            textToken = tokens[++i];
		            body += "\n" + this.renderer.text(textToken);
		          }
		          if (top) {
		            out += this.renderer.paragraph({
		              type: "paragraph",
		              raw: body,
		              text: body,
		              tokens: [{ type: "text", raw: body, text: body, escaped: true }]
		            });
		          } else {
		            out += body;
		          }
		          continue;
		        }
		        default: {
		          const errMsg = 'Token with "' + token.type + '" type was not found.';
		          if (this.options.silent) {
		            console.error(errMsg);
		            return "";
		          } else {
		            throw new Error(errMsg);
		          }
		        }
		      }
		    }
		    return out;
		  }
		  /**
		   * Parse Inline Tokens
		   */
		  parseInline(tokens, renderer = this.renderer) {
		    let out = "";
		    for (let i = 0; i < tokens.length; i++) {
		      const anyToken = tokens[i];
		      if (this.options.extensions?.renderers?.[anyToken.type]) {
		        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
		        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
		          out += ret || "";
		          continue;
		        }
		      }
		      const token = anyToken;
		      switch (token.type) {
		        case "escape": {
		          out += renderer.text(token);
		          break;
		        }
		        case "html": {
		          out += renderer.html(token);
		          break;
		        }
		        case "link": {
		          out += renderer.link(token);
		          break;
		        }
		        case "image": {
		          out += renderer.image(token);
		          break;
		        }
		        case "strong": {
		          out += renderer.strong(token);
		          break;
		        }
		        case "em": {
		          out += renderer.em(token);
		          break;
		        }
		        case "codespan": {
		          out += renderer.codespan(token);
		          break;
		        }
		        case "br": {
		          out += renderer.br(token);
		          break;
		        }
		        case "del": {
		          out += renderer.del(token);
		          break;
		        }
		        case "text": {
		          out += renderer.text(token);
		          break;
		        }
		        default: {
		          const errMsg = 'Token with "' + token.type + '" type was not found.';
		          if (this.options.silent) {
		            console.error(errMsg);
		            return "";
		          } else {
		            throw new Error(errMsg);
		          }
		        }
		      }
		    }
		    return out;
		  }
		};
		var _Hooks = class {
		  options;
		  block;
		  constructor(options2) {
		    this.options = options2 || _defaults;
		  }
		  static passThroughHooks = /* @__PURE__ */ new Set([
		    "preprocess",
		    "postprocess",
		    "processAllTokens"
		  ]);
		  /**
		   * Process markdown before marked
		   */
		  preprocess(markdown) {
		    return markdown;
		  }
		  /**
		   * Process HTML after marked is finished
		   */
		  postprocess(html22) {
		    return html22;
		  }
		  /**
		   * Process all tokens before walk tokens
		   */
		  processAllTokens(tokens) {
		    return tokens;
		  }
		  /**
		   * Provide function to tokenize markdown
		   */
		  provideLexer() {
		    return this.block ? _Lexer.lex : _Lexer.lexInline;
		  }
		  /**
		   * Provide function to parse tokens
		   */
		  provideParser() {
		    return this.block ? _Parser.parse : _Parser.parseInline;
		  }
		};
		var Marked = class {
		  defaults = _getDefaults();
		  options = this.setOptions;
		  parse = this.parseMarkdown(true);
		  parseInline = this.parseMarkdown(false);
		  Parser = _Parser;
		  Renderer = _Renderer;
		  TextRenderer = _TextRenderer;
		  Lexer = _Lexer;
		  Tokenizer = _Tokenizer;
		  Hooks = _Hooks;
		  constructor(...args) {
		    this.use(...args);
		  }
		  /**
		   * Run callback for every token
		   */
		  walkTokens(tokens, callback) {
		    let values = [];
		    for (const token of tokens) {
		      values = values.concat(callback.call(this, token));
		      switch (token.type) {
		        case "table": {
		          const tableToken = token;
		          for (const cell of tableToken.header) {
		            values = values.concat(this.walkTokens(cell.tokens, callback));
		          }
		          for (const row of tableToken.rows) {
		            for (const cell of row) {
		              values = values.concat(this.walkTokens(cell.tokens, callback));
		            }
		          }
		          break;
		        }
		        case "list": {
		          const listToken = token;
		          values = values.concat(this.walkTokens(listToken.items, callback));
		          break;
		        }
		        default: {
		          const genericToken = token;
		          if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
		            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
		              const tokens2 = genericToken[childTokens].flat(Infinity);
		              values = values.concat(this.walkTokens(tokens2, callback));
		            });
		          } else if (genericToken.tokens) {
		            values = values.concat(this.walkTokens(genericToken.tokens, callback));
		          }
		        }
		      }
		    }
		    return values;
		  }
		  use(...args) {
		    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
		    args.forEach((pack) => {
		      const opts = { ...pack };
		      opts.async = this.defaults.async || opts.async || false;
		      if (pack.extensions) {
		        pack.extensions.forEach((ext) => {
		          if (!ext.name) {
		            throw new Error("extension name required");
		          }
		          if ("renderer" in ext) {
		            const prevRenderer = extensions.renderers[ext.name];
		            if (prevRenderer) {
		              extensions.renderers[ext.name] = function(...args2) {
		                let ret = ext.renderer.apply(this, args2);
		                if (ret === false) {
		                  ret = prevRenderer.apply(this, args2);
		                }
		                return ret;
		              };
		            } else {
		              extensions.renderers[ext.name] = ext.renderer;
		            }
		          }
		          if ("tokenizer" in ext) {
		            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
		              throw new Error("extension level must be 'block' or 'inline'");
		            }
		            const extLevel = extensions[ext.level];
		            if (extLevel) {
		              extLevel.unshift(ext.tokenizer);
		            } else {
		              extensions[ext.level] = [ext.tokenizer];
		            }
		            if (ext.start) {
		              if (ext.level === "block") {
		                if (extensions.startBlock) {
		                  extensions.startBlock.push(ext.start);
		                } else {
		                  extensions.startBlock = [ext.start];
		                }
		              } else if (ext.level === "inline") {
		                if (extensions.startInline) {
		                  extensions.startInline.push(ext.start);
		                } else {
		                  extensions.startInline = [ext.start];
		                }
		              }
		            }
		          }
		          if ("childTokens" in ext && ext.childTokens) {
		            extensions.childTokens[ext.name] = ext.childTokens;
		          }
		        });
		        opts.extensions = extensions;
		      }
		      if (pack.renderer) {
		        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
		        for (const prop in pack.renderer) {
		          if (!(prop in renderer)) {
		            throw new Error(`renderer '${prop}' does not exist`);
		          }
		          if (["options", "parser"].includes(prop)) {
		            continue;
		          }
		          const rendererProp = prop;
		          const rendererFunc = pack.renderer[rendererProp];
		          const prevRenderer = renderer[rendererProp];
		          renderer[rendererProp] = (...args2) => {
		            let ret = rendererFunc.apply(renderer, args2);
		            if (ret === false) {
		              ret = prevRenderer.apply(renderer, args2);
		            }
		            return ret || "";
		          };
		        }
		        opts.renderer = renderer;
		      }
		      if (pack.tokenizer) {
		        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
		        for (const prop in pack.tokenizer) {
		          if (!(prop in tokenizer)) {
		            throw new Error(`tokenizer '${prop}' does not exist`);
		          }
		          if (["options", "rules", "lexer"].includes(prop)) {
		            continue;
		          }
		          const tokenizerProp = prop;
		          const tokenizerFunc = pack.tokenizer[tokenizerProp];
		          const prevTokenizer = tokenizer[tokenizerProp];
		          tokenizer[tokenizerProp] = (...args2) => {
		            let ret = tokenizerFunc.apply(tokenizer, args2);
		            if (ret === false) {
		              ret = prevTokenizer.apply(tokenizer, args2);
		            }
		            return ret;
		          };
		        }
		        opts.tokenizer = tokenizer;
		      }
		      if (pack.hooks) {
		        const hooks = this.defaults.hooks || new _Hooks();
		        for (const prop in pack.hooks) {
		          if (!(prop in hooks)) {
		            throw new Error(`hook '${prop}' does not exist`);
		          }
		          if (["options", "block"].includes(prop)) {
		            continue;
		          }
		          const hooksProp = prop;
		          const hooksFunc = pack.hooks[hooksProp];
		          const prevHook = hooks[hooksProp];
		          if (_Hooks.passThroughHooks.has(prop)) {
		            hooks[hooksProp] = (arg) => {
		              if (this.defaults.async) {
		                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
		                  return prevHook.call(hooks, ret2);
		                });
		              }
		              const ret = hooksFunc.call(hooks, arg);
		              return prevHook.call(hooks, ret);
		            };
		          } else {
		            hooks[hooksProp] = (...args2) => {
		              let ret = hooksFunc.apply(hooks, args2);
		              if (ret === false) {
		                ret = prevHook.apply(hooks, args2);
		              }
		              return ret;
		            };
		          }
		        }
		        opts.hooks = hooks;
		      }
		      if (pack.walkTokens) {
		        const walkTokens2 = this.defaults.walkTokens;
		        const packWalktokens = pack.walkTokens;
		        opts.walkTokens = function(token) {
		          let values = [];
		          values.push(packWalktokens.call(this, token));
		          if (walkTokens2) {
		            values = values.concat(walkTokens2.call(this, token));
		          }
		          return values;
		        };
		      }
		      this.defaults = { ...this.defaults, ...opts };
		    });
		    return this;
		  }
		  setOptions(opt) {
		    this.defaults = { ...this.defaults, ...opt };
		    return this;
		  }
		  lexer(src, options2) {
		    return _Lexer.lex(src, options2 ?? this.defaults);
		  }
		  parser(tokens, options2) {
		    return _Parser.parse(tokens, options2 ?? this.defaults);
		  }
		  parseMarkdown(blockType) {
		    const parse2 = (src, options2) => {
		      const origOpt = { ...options2 };
		      const opt = { ...this.defaults, ...origOpt };
		      const throwError = this.onError(!!opt.silent, !!opt.async);
		      if (this.defaults.async === true && origOpt.async === false) {
		        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
		      }
		      if (typeof src === "undefined" || src === null) {
		        return throwError(new Error("marked(): input parameter is undefined or null"));
		      }
		      if (typeof src !== "string") {
		        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
		      }
		      if (opt.hooks) {
		        opt.hooks.options = opt;
		        opt.hooks.block = blockType;
		      }
		      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
		      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
		      if (opt.async) {
		        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html22) => opt.hooks ? opt.hooks.postprocess(html22) : html22).catch(throwError);
		      }
		      try {
		        if (opt.hooks) {
		          src = opt.hooks.preprocess(src);
		        }
		        let tokens = lexer2(src, opt);
		        if (opt.hooks) {
		          tokens = opt.hooks.processAllTokens(tokens);
		        }
		        if (opt.walkTokens) {
		          this.walkTokens(tokens, opt.walkTokens);
		        }
		        let html22 = parser2(tokens, opt);
		        if (opt.hooks) {
		          html22 = opt.hooks.postprocess(html22);
		        }
		        return html22;
		      } catch (e) {
		        return throwError(e);
		      }
		    };
		    return parse2;
		  }
		  onError(silent, async) {
		    return (e) => {
		      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
		      if (silent) {
		        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
		        if (async) {
		          return Promise.resolve(msg);
		        }
		        return msg;
		      }
		      if (async) {
		        return Promise.reject(e);
		      }
		      throw e;
		    };
		  }
		};
		var markedInstance = new Marked();
		function marked(src, opt) {
		  return markedInstance.parse(src, opt);
		}
		marked.options = marked.setOptions = function(options2) {
		  markedInstance.setOptions(options2);
		  marked.defaults = markedInstance.defaults;
		  changeDefaults(marked.defaults);
		  return marked;
		};
		marked.getDefaults = _getDefaults;
		marked.defaults = _defaults;
		marked.use = function(...args) {
		  markedInstance.use(...args);
		  marked.defaults = markedInstance.defaults;
		  changeDefaults(marked.defaults);
		  return marked;
		};
		marked.walkTokens = function(tokens, callback) {
		  return markedInstance.walkTokens(tokens, callback);
		};
		marked.parseInline = markedInstance.parseInline;
		marked.Parser = _Parser;
		marked.parser = _Parser.parse;
		marked.Renderer = _Renderer;
		marked.TextRenderer = _TextRenderer;
		marked.Lexer = _Lexer;
		marked.lexer = _Lexer.lex;
		marked.Tokenizer = _Tokenizer;
		marked.Hooks = _Hooks;
		marked.parse = marked;
		var options = marked.options;
		var setOptions = marked.setOptions;
		var use = marked.use;
		var walkTokens = marked.walkTokens;
		var parseInline = marked.parseInline;
		var parser = _Parser.parse;
		var lexer = _Lexer.lex;

		// node_modules/.pnpm/dompurify@3.2.6/node_modules/dompurify/dist/purify.es.mjs
		var {
		  entries,
		  setPrototypeOf,
		  isFrozen,
		  getPrototypeOf,
		  getOwnPropertyDescriptor
		} = Object;
		var {
		  freeze,
		  seal,
		  create
		} = Object;
		var {
		  apply,
		  construct
		} = typeof Reflect !== "undefined" && Reflect;
		if (!freeze) {
		  freeze = function freeze2(x) {
		    return x;
		  };
		}
		if (!seal) {
		  seal = function seal2(x) {
		    return x;
		  };
		}
		if (!apply) {
		  apply = function apply3(fun, thisValue, args) {
		    return fun.apply(thisValue, args);
		  };
		}
		if (!construct) {
		  construct = function construct2(Func, args) {
		    return new Func(...args);
		  };
		}
		var arrayForEach = unapply(Array.prototype.forEach);
		var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
		var arrayPop = unapply(Array.prototype.pop);
		var arrayPush = unapply(Array.prototype.push);
		var arraySplice = unapply(Array.prototype.splice);
		var stringToLowerCase = unapply(String.prototype.toLowerCase);
		var stringToString = unapply(String.prototype.toString);
		var stringMatch = unapply(String.prototype.match);
		var stringReplace = unapply(String.prototype.replace);
		var stringIndexOf = unapply(String.prototype.indexOf);
		var stringTrim = unapply(String.prototype.trim);
		var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		var regExpTest = unapply(RegExp.prototype.test);
		var typeErrorCreate = unconstruct(TypeError);
		function unapply(func) {
		  return function(thisArg) {
		    if (thisArg instanceof RegExp) {
		      thisArg.lastIndex = 0;
		    }
		    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      args[_key - 1] = arguments[_key];
		    }
		    return apply(func, thisArg, args);
		  };
		}
		function unconstruct(func) {
		  return function() {
		    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		      args[_key2] = arguments[_key2];
		    }
		    return construct(func, args);
		  };
		}
		function addToSet(set, array) {
		  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
		  if (setPrototypeOf) {
		    setPrototypeOf(set, null);
		  }
		  let l = array.length;
		  while (l--) {
		    let element = array[l];
		    if (typeof element === "string") {
		      const lcElement = transformCaseFunc(element);
		      if (lcElement !== element) {
		        if (!isFrozen(array)) {
		          array[l] = lcElement;
		        }
		        element = lcElement;
		      }
		    }
		    set[element] = true;
		  }
		  return set;
		}
		function cleanArray(array) {
		  for (let index = 0; index < array.length; index++) {
		    const isPropertyExist = objectHasOwnProperty(array, index);
		    if (!isPropertyExist) {
		      array[index] = null;
		    }
		  }
		  return array;
		}
		function clone(object) {
		  const newObject = create(null);
		  for (const [property, value] of entries(object)) {
		    const isPropertyExist = objectHasOwnProperty(object, property);
		    if (isPropertyExist) {
		      if (Array.isArray(value)) {
		        newObject[property] = cleanArray(value);
		      } else if (value && typeof value === "object" && value.constructor === Object) {
		        newObject[property] = clone(value);
		      } else {
		        newObject[property] = value;
		      }
		    }
		  }
		  return newObject;
		}
		function lookupGetter(object, prop) {
		  while (object !== null) {
		    const desc = getOwnPropertyDescriptor(object, prop);
		    if (desc) {
		      if (desc.get) {
		        return unapply(desc.get);
		      }
		      if (typeof desc.value === "function") {
		        return unapply(desc.value);
		      }
		    }
		    object = getPrototypeOf(object);
		  }
		  function fallbackValue() {
		    return null;
		  }
		  return fallbackValue;
		}
		var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
		var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
		var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
		var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
		var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
		var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
		var text = freeze(["#text"]);
		var html2 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
		var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
		var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
		var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
		var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
		var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
		var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
		var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
		var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
		var IS_ALLOWED_URI = seal(
		  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
		  // eslint-disable-line no-useless-escape
		);
		var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		var ATTR_WHITESPACE = seal(
		  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
		  // eslint-disable-line no-control-regex
		);
		var DOCTYPE_NAME = seal(/^html$/i);
		var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
		var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
		  __proto__: null,
		  ARIA_ATTR,
		  ATTR_WHITESPACE,
		  CUSTOM_ELEMENT,
		  DATA_ATTR,
		  DOCTYPE_NAME,
		  ERB_EXPR,
		  IS_ALLOWED_URI,
		  IS_SCRIPT_OR_DATA,
		  MUSTACHE_EXPR,
		  TMPLIT_EXPR
		});
		var NODE_TYPE = {
		  element: 1,
		  attribute: 2,
		  text: 3,
		  cdataSection: 4,
		  entityReference: 5,
		  // Deprecated
		  entityNode: 6,
		  // Deprecated
		  progressingInstruction: 7,
		  comment: 8,
		  document: 9,
		  documentType: 10,
		  documentFragment: 11,
		  notation: 12
		  // Deprecated
		};
		var getGlobal = function getGlobal2() {
		  return typeof window === "undefined" ? null : window;
		};
		var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
		  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
		    return null;
		  }
		  let suffix = null;
		  const ATTR_NAME = "data-tt-policy-suffix";
		  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
		    suffix = purifyHostElement.getAttribute(ATTR_NAME);
		  }
		  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
		  try {
		    return trustedTypes.createPolicy(policyName, {
		      createHTML(html3) {
		        return html3;
		      },
		      createScriptURL(scriptUrl) {
		        return scriptUrl;
		      }
		    });
		  } catch (_) {
		    console.warn("TrustedTypes policy " + policyName + " could not be created.");
		    return null;
		  }
		};
		var _createHooksMap = function _createHooksMap2() {
		  return {
		    afterSanitizeAttributes: [],
		    afterSanitizeElements: [],
		    afterSanitizeShadowDOM: [],
		    beforeSanitizeAttributes: [],
		    beforeSanitizeElements: [],
		    beforeSanitizeShadowDOM: [],
		    uponSanitizeAttribute: [],
		    uponSanitizeElement: [],
		    uponSanitizeShadowNode: []
		  };
		};
		function createDOMPurify() {
		  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
		  const DOMPurify = (root) => createDOMPurify(root);
		  DOMPurify.version = "3.2.6";
		  DOMPurify.removed = [];
		  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
		    DOMPurify.isSupported = false;
		    return DOMPurify;
		  }
		  let {
		    document: document2
		  } = window2;
		  const originalDocument = document2;
		  const currentScript = originalDocument.currentScript;
		  const {
		    DocumentFragment,
		    HTMLTemplateElement,
		    Node,
		    Element,
		    NodeFilter,
		    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
		    HTMLFormElement,
		    DOMParser,
		    trustedTypes
		  } = window2;
		  const ElementPrototype = Element.prototype;
		  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
		  const remove = lookupGetter(ElementPrototype, "remove");
		  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
		  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
		  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
		  if (typeof HTMLTemplateElement === "function") {
		    const template = document2.createElement("template");
		    if (template.content && template.content.ownerDocument) {
		      document2 = template.content.ownerDocument;
		    }
		  }
		  let trustedTypesPolicy;
		  let emptyHTML = "";
		  const {
		    implementation,
		    createNodeIterator,
		    createDocumentFragment,
		    getElementsByTagName
		  } = document2;
		  const {
		    importNode
		  } = originalDocument;
		  let hooks = _createHooksMap();
		  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
		  const {
		    MUSTACHE_EXPR: MUSTACHE_EXPR2,
		    ERB_EXPR: ERB_EXPR2,
		    TMPLIT_EXPR: TMPLIT_EXPR2,
		    DATA_ATTR: DATA_ATTR2,
		    ARIA_ATTR: ARIA_ATTR2,
		    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
		    ATTR_WHITESPACE: ATTR_WHITESPACE2,
		    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
		  } = EXPRESSIONS;
		  let {
		    IS_ALLOWED_URI: IS_ALLOWED_URI$1
		  } = EXPRESSIONS;
		  let ALLOWED_TAGS = null;
		  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
		  let ALLOWED_ATTR = null;
		  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html2, ...svg, ...mathMl, ...xml]);
		  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
		    tagNameCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    },
		    attributeNameCheck: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: null
		    },
		    allowCustomizedBuiltInElements: {
		      writable: true,
		      configurable: false,
		      enumerable: true,
		      value: false
		    }
		  }));
		  let FORBID_TAGS = null;
		  let FORBID_ATTR = null;
		  let ALLOW_ARIA_ATTR = true;
		  let ALLOW_DATA_ATTR = true;
		  let ALLOW_UNKNOWN_PROTOCOLS = false;
		  let ALLOW_SELF_CLOSE_IN_ATTR = true;
		  let SAFE_FOR_TEMPLATES = false;
		  let SAFE_FOR_XML = true;
		  let WHOLE_DOCUMENT = false;
		  let SET_CONFIG = false;
		  let FORCE_BODY = false;
		  let RETURN_DOM = false;
		  let RETURN_DOM_FRAGMENT = false;
		  let RETURN_TRUSTED_TYPE = false;
		  let SANITIZE_DOM = true;
		  let SANITIZE_NAMED_PROPS = false;
		  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
		  let KEEP_CONTENT = true;
		  let IN_PLACE = false;
		  let USE_PROFILES = {};
		  let FORBID_CONTENTS = null;
		  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
		  let DATA_URI_TAGS = null;
		  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
		  let URI_SAFE_ATTRIBUTES = null;
		  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
		  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		  let NAMESPACE = HTML_NAMESPACE;
		  let IS_EMPTY_INPUT = false;
		  let ALLOWED_NAMESPACES = null;
		  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
		  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
		  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
		  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
		  let PARSER_MEDIA_TYPE = null;
		  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
		  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
		  let transformCaseFunc = null;
		  let CONFIG = null;
		  const formElement = document2.createElement("form");
		  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
		    return testValue instanceof RegExp || testValue instanceof Function;
		  };
		  const _parseConfig = function _parseConfig2() {
		    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		    if (CONFIG && CONFIG === cfg) {
		      return;
		    }
		    if (!cfg || typeof cfg !== "object") {
		      cfg = {};
		    }
		    cfg = clone(cfg);
		    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
		    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
		    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
		    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
		    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
		    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
		    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
		    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
		    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
		    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
		    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
		    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
		    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
		    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
		    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
		    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
		    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
		    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
		    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
		    RETURN_DOM = cfg.RETURN_DOM || false;
		    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
		    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
		    FORCE_BODY = cfg.FORCE_BODY || false;
		    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
		    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
		    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
		    IN_PLACE = cfg.IN_PLACE || false;
		    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
		    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
		    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
		    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
		    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
		    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
		      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
		    }
		    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
		      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
		    }
		    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
		      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
		    }
		    if (SAFE_FOR_TEMPLATES) {
		      ALLOW_DATA_ATTR = false;
		    }
		    if (RETURN_DOM_FRAGMENT) {
		      RETURN_DOM = true;
		    }
		    if (USE_PROFILES) {
		      ALLOWED_TAGS = addToSet({}, text);
		      ALLOWED_ATTR = [];
		      if (USE_PROFILES.html === true) {
		        addToSet(ALLOWED_TAGS, html$1);
		        addToSet(ALLOWED_ATTR, html2);
		      }
		      if (USE_PROFILES.svg === true) {
		        addToSet(ALLOWED_TAGS, svg$1);
		        addToSet(ALLOWED_ATTR, svg);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		      if (USE_PROFILES.svgFilters === true) {
		        addToSet(ALLOWED_TAGS, svgFilters);
		        addToSet(ALLOWED_ATTR, svg);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		      if (USE_PROFILES.mathMl === true) {
		        addToSet(ALLOWED_TAGS, mathMl$1);
		        addToSet(ALLOWED_ATTR, mathMl);
		        addToSet(ALLOWED_ATTR, xml);
		      }
		    }
		    if (cfg.ADD_TAGS) {
		      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
		        ALLOWED_TAGS = clone(ALLOWED_TAGS);
		      }
		      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
		    }
		    if (cfg.ADD_ATTR) {
		      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
		        ALLOWED_ATTR = clone(ALLOWED_ATTR);
		      }
		      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
		    }
		    if (cfg.ADD_URI_SAFE_ATTR) {
		      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
		    }
		    if (cfg.FORBID_CONTENTS) {
		      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
		        FORBID_CONTENTS = clone(FORBID_CONTENTS);
		      }
		      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
		    }
		    if (KEEP_CONTENT) {
		      ALLOWED_TAGS["#text"] = true;
		    }
		    if (WHOLE_DOCUMENT) {
		      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
		    }
		    if (ALLOWED_TAGS.table) {
		      addToSet(ALLOWED_TAGS, ["tbody"]);
		      delete FORBID_TAGS.tbody;
		    }
		    if (cfg.TRUSTED_TYPES_POLICY) {
		      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
		        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
		      }
		      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
		        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
		      }
		      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
		      emptyHTML = trustedTypesPolicy.createHTML("");
		    } else {
		      if (trustedTypesPolicy === void 0) {
		        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
		      }
		      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
		        emptyHTML = trustedTypesPolicy.createHTML("");
		      }
		    }
		    if (freeze) {
		      freeze(cfg);
		    }
		    CONFIG = cfg;
		  };
		  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
		  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		  const _checkValidNamespace = function _checkValidNamespace2(element) {
		    let parent = getParentNode(element);
		    if (!parent || !parent.tagName) {
		      parent = {
		        namespaceURI: NAMESPACE,
		        tagName: "template"
		      };
		    }
		    const tagName = stringToLowerCase(element.tagName);
		    const parentTagName = stringToLowerCase(parent.tagName);
		    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
		      return false;
		    }
		    if (element.namespaceURI === SVG_NAMESPACE) {
		      if (parent.namespaceURI === HTML_NAMESPACE) {
		        return tagName === "svg";
		      }
		      if (parent.namespaceURI === MATHML_NAMESPACE) {
		        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		      }
		      return Boolean(ALL_SVG_TAGS[tagName]);
		    }
		    if (element.namespaceURI === MATHML_NAMESPACE) {
		      if (parent.namespaceURI === HTML_NAMESPACE) {
		        return tagName === "math";
		      }
		      if (parent.namespaceURI === SVG_NAMESPACE) {
		        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
		      }
		      return Boolean(ALL_MATHML_TAGS[tagName]);
		    }
		    if (element.namespaceURI === HTML_NAMESPACE) {
		      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
		        return false;
		      }
		      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
		        return false;
		      }
		      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
		    }
		    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
		      return true;
		    }
		    return false;
		  };
		  const _forceRemove = function _forceRemove2(node) {
		    arrayPush(DOMPurify.removed, {
		      element: node
		    });
		    try {
		      getParentNode(node).removeChild(node);
		    } catch (_) {
		      remove(node);
		    }
		  };
		  const _removeAttribute = function _removeAttribute2(name, element) {
		    try {
		      arrayPush(DOMPurify.removed, {
		        attribute: element.getAttributeNode(name),
		        from: element
		      });
		    } catch (_) {
		      arrayPush(DOMPurify.removed, {
		        attribute: null,
		        from: element
		      });
		    }
		    element.removeAttribute(name);
		    if (name === "is") {
		      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
		        try {
		          _forceRemove(element);
		        } catch (_) {
		        }
		      } else {
		        try {
		          element.setAttribute(name, "");
		        } catch (_) {
		        }
		      }
		    }
		  };
		  const _initDocument = function _initDocument2(dirty) {
		    let doc = null;
		    let leadingWhitespace = null;
		    if (FORCE_BODY) {
		      dirty = "<remove></remove>" + dirty;
		    } else {
		      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
		      leadingWhitespace = matches && matches[0];
		    }
		    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
		      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
		    }
		    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
		    if (NAMESPACE === HTML_NAMESPACE) {
		      try {
		        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		      } catch (_) {
		      }
		    }
		    if (!doc || !doc.documentElement) {
		      doc = implementation.createDocument(NAMESPACE, "template", null);
		      try {
		        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
		      } catch (_) {
		      }
		    }
		    const body = doc.body || doc.documentElement;
		    if (dirty && leadingWhitespace) {
		      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		    }
		    if (NAMESPACE === HTML_NAMESPACE) {
		      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
		    }
		    return WHOLE_DOCUMENT ? doc.documentElement : body;
		  };
		  const _createNodeIterator = function _createNodeIterator2(root) {
		    return createNodeIterator.call(
		      root.ownerDocument || root,
		      root,
		      // eslint-disable-next-line no-bitwise
		      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
		      null
		    );
		  };
		  const _isClobbered = function _isClobbered2(element) {
		    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
		  };
		  const _isNode = function _isNode2(value) {
		    return typeof Node === "function" && value instanceof Node;
		  };
		  function _executeHooks(hooks2, currentNode, data) {
		    arrayForEach(hooks2, (hook) => {
		      hook.call(DOMPurify, currentNode, data, CONFIG);
		    });
		  }
		  const _sanitizeElements = function _sanitizeElements2(currentNode) {
		    let content = null;
		    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
		    if (_isClobbered(currentNode)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    const tagName = transformCaseFunc(currentNode.nodeName);
		    _executeHooks(hooks.uponSanitizeElement, currentNode, {
		      tagName,
		      allowedTags: ALLOWED_TAGS
		    });
		    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
		      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
		        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
		          return false;
		        }
		        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
		          return false;
		        }
		      }
		      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
		        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
		        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
		        if (childNodes && parentNode) {
		          const childCount = childNodes.length;
		          for (let i = childCount - 1; i >= 0; --i) {
		            const childClone = cloneNode(childNodes[i], true);
		            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
		            parentNode.insertBefore(childClone, getNextSibling(currentNode));
		          }
		        }
		      }
		      _forceRemove(currentNode);
		      return true;
		    }
		    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
		      _forceRemove(currentNode);
		      return true;
		    }
		    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
		      content = currentNode.textContent;
		      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
		        content = stringReplace(content, expr, " ");
		      });
		      if (currentNode.textContent !== content) {
		        arrayPush(DOMPurify.removed, {
		          element: currentNode.cloneNode()
		        });
		        currentNode.textContent = content;
		      }
		    }
		    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
		    return false;
		  };
		  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
		    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
		      return false;
		    }
		    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
		    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
		    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
		      if (
		        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
		        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
		        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
		        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
		      ) ;
		      else {
		        return false;
		      }
		    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
		    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
		    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
		    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, ""))) ;
		    else if (value) {
		      return false;
		    } else ;
		    return true;
		  };
		  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
		    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
		  };
		  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
		    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
		    const {
		      attributes
		    } = currentNode;
		    if (!attributes || _isClobbered(currentNode)) {
		      return;
		    }
		    const hookEvent = {
		      attrName: "",
		      attrValue: "",
		      keepAttr: true,
		      allowedAttributes: ALLOWED_ATTR,
		      forceKeepAttr: void 0
		    };
		    let l = attributes.length;
		    while (l--) {
		      const attr = attributes[l];
		      const {
		        name,
		        namespaceURI,
		        value: attrValue
		      } = attr;
		      const lcName = transformCaseFunc(name);
		      const initValue = attrValue;
		      let value = name === "value" ? initValue : stringTrim(initValue);
		      hookEvent.attrName = lcName;
		      hookEvent.attrValue = value;
		      hookEvent.keepAttr = true;
		      hookEvent.forceKeepAttr = void 0;
		      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
		      value = hookEvent.attrValue;
		      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
		        _removeAttribute(name, currentNode);
		        value = SANITIZE_NAMED_PROPS_PREFIX + value;
		      }
		      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      if (hookEvent.forceKeepAttr) {
		        continue;
		      }
		      if (!hookEvent.keepAttr) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      if (SAFE_FOR_TEMPLATES) {
		        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
		          value = stringReplace(value, expr, " ");
		        });
		      }
		      const lcTag = transformCaseFunc(currentNode.nodeName);
		      if (!_isValidAttribute(lcTag, lcName, value)) {
		        _removeAttribute(name, currentNode);
		        continue;
		      }
		      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
		        if (namespaceURI) ;
		        else {
		          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
		            case "TrustedHTML": {
		              value = trustedTypesPolicy.createHTML(value);
		              break;
		            }
		            case "TrustedScriptURL": {
		              value = trustedTypesPolicy.createScriptURL(value);
		              break;
		            }
		          }
		        }
		      }
		      if (value !== initValue) {
		        try {
		          if (namespaceURI) {
		            currentNode.setAttributeNS(namespaceURI, name, value);
		          } else {
		            currentNode.setAttribute(name, value);
		          }
		          if (_isClobbered(currentNode)) {
		            _forceRemove(currentNode);
		          } else {
		            arrayPop(DOMPurify.removed);
		          }
		        } catch (_) {
		          _removeAttribute(name, currentNode);
		        }
		      }
		    }
		    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		  };
		  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
		    let shadowNode = null;
		    const shadowIterator = _createNodeIterator(fragment);
		    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
		    while (shadowNode = shadowIterator.nextNode()) {
		      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
		      _sanitizeElements(shadowNode);
		      _sanitizeAttributes(shadowNode);
		      if (shadowNode.content instanceof DocumentFragment) {
		        _sanitizeShadowDOM2(shadowNode.content);
		      }
		    }
		    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		  };
		  DOMPurify.sanitize = function(dirty) {
		    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		    let body = null;
		    let importedNode = null;
		    let currentNode = null;
		    let returnNode = null;
		    IS_EMPTY_INPUT = !dirty;
		    if (IS_EMPTY_INPUT) {
		      dirty = "<!-->";
		    }
		    if (typeof dirty !== "string" && !_isNode(dirty)) {
		      if (typeof dirty.toString === "function") {
		        dirty = dirty.toString();
		        if (typeof dirty !== "string") {
		          throw typeErrorCreate("dirty is not a string, aborting");
		        }
		      } else {
		        throw typeErrorCreate("toString is not a function");
		      }
		    }
		    if (!DOMPurify.isSupported) {
		      return dirty;
		    }
		    if (!SET_CONFIG) {
		      _parseConfig(cfg);
		    }
		    DOMPurify.removed = [];
		    if (typeof dirty === "string") {
		      IN_PLACE = false;
		    }
		    if (IN_PLACE) {
		      if (dirty.nodeName) {
		        const tagName = transformCaseFunc(dirty.nodeName);
		        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
		          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
		        }
		      }
		    } else if (dirty instanceof Node) {
		      body = _initDocument("<!---->");
		      importedNode = body.ownerDocument.importNode(dirty, true);
		      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
		        body = importedNode;
		      } else if (importedNode.nodeName === "HTML") {
		        body = importedNode;
		      } else {
		        body.appendChild(importedNode);
		      }
		    } else {
		      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
		      dirty.indexOf("<") === -1) {
		        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
		      }
		      body = _initDocument(dirty);
		      if (!body) {
		        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
		      }
		    }
		    if (body && FORCE_BODY) {
		      _forceRemove(body.firstChild);
		    }
		    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
		    while (currentNode = nodeIterator.nextNode()) {
		      _sanitizeElements(currentNode);
		      _sanitizeAttributes(currentNode);
		      if (currentNode.content instanceof DocumentFragment) {
		        _sanitizeShadowDOM(currentNode.content);
		      }
		    }
		    if (IN_PLACE) {
		      return dirty;
		    }
		    if (RETURN_DOM) {
		      if (RETURN_DOM_FRAGMENT) {
		        returnNode = createDocumentFragment.call(body.ownerDocument);
		        while (body.firstChild) {
		          returnNode.appendChild(body.firstChild);
		        }
		      } else {
		        returnNode = body;
		      }
		      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
		        returnNode = importNode.call(originalDocument, returnNode, true);
		      }
		      return returnNode;
		    }
		    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
		    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
		      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
		    }
		    if (SAFE_FOR_TEMPLATES) {
		      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
		        serializedHTML = stringReplace(serializedHTML, expr, " ");
		      });
		    }
		    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
		  };
		  DOMPurify.setConfig = function() {
		    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		    _parseConfig(cfg);
		    SET_CONFIG = true;
		  };
		  DOMPurify.clearConfig = function() {
		    CONFIG = null;
		    SET_CONFIG = false;
		  };
		  DOMPurify.isValidAttribute = function(tag2, attr, value) {
		    if (!CONFIG) {
		      _parseConfig({});
		    }
		    const lcTag = transformCaseFunc(tag2);
		    const lcName = transformCaseFunc(attr);
		    return _isValidAttribute(lcTag, lcName, value);
		  };
		  DOMPurify.addHook = function(entryPoint, hookFunction) {
		    if (typeof hookFunction !== "function") {
		      return;
		    }
		    arrayPush(hooks[entryPoint], hookFunction);
		  };
		  DOMPurify.removeHook = function(entryPoint, hookFunction) {
		    if (hookFunction !== void 0) {
		      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
		      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
		    }
		    return arrayPop(hooks[entryPoint]);
		  };
		  DOMPurify.removeHooks = function(entryPoint) {
		    hooks[entryPoint] = [];
		  };
		  DOMPurify.removeAllHooks = function() {
		    hooks = _createHooksMap();
		  };
		  return DOMPurify;
		}
		var purify = createDOMPurify();

		// src/client/api.ts
		var BASE = "tcm/api";
		var ApiError = class extends Error {
		  code;
		  status;
		  constructor(message, code, status) {
		    super(message);
		    this.code = code;
		    this.status = status;
		  }
		};
		function endpoint(route, params) {
		  const url = new URL(`${BASE}${route}`, document.baseURI);
		  for (const [key, value] of Object.entries(params ?? {})) {
		    if (value === void 0 || value === null || value === "") continue;
		    url.searchParams.set(key, String(value));
		  }
		  return url.href;
		}
		async function request(route, init = {}) {
		  const { params, ...rest } = init;
		  let response;
		  try {
		    response = await fetch(endpoint(route, params), {
		      ...rest,
		      headers: { "content-type": "application/json", ...rest.headers ?? {} }
		    });
		  } catch (error) {
		    throw new ApiError(`\u65E0\u6CD5\u8FDE\u63A5\u5BBF\u4E3B\uFF1A${error?.message ?? error}`, "NETWORK", 0);
		  }
		  let payload = null;
		  try {
		    payload = await response.json();
		  } catch {
		    payload = null;
		  }
		  if (!response.ok || payload?.ok !== true) {
		    const message = payload?.message ?? `\u8BF7\u6C42\u5931\u8D25\uFF08HTTP ${response.status}\uFF09`;
		    throw new ApiError(message, payload?.code ?? "HTTP_ERROR", response.status);
		  }
		  return payload.data;
		}
		var api = {
		  workspaces: () => request("/workspaces"),
		  bootstrap: (root) => request("/bootstrap", { params: { root } }),
		  section: (root, section) => request("/section", { params: { root, section } }),
		  doc: (root, rel) => request("/doc", { params: { root, path: rel } }),
		  saveDoc: (root, rel, content, mtime) => request("/doc", { method: "PUT", params: { root }, body: JSON.stringify({ root, path: rel, content, mtime }) }),
		  createDoc: (root, section, title, kind) => request("/doc", { method: "POST", body: JSON.stringify({ root, section, title, kind }) }),
		  renameDoc: (root, rel, title) => request("/doc", { method: "PATCH", body: JSON.stringify({ root, path: rel, title }) }),
		  deleteDoc: (root, rel) => request("/doc", { method: "DELETE", params: { root, path: rel } }),
		  createSection: (root, name) => request("/section", { method: "POST", body: JSON.stringify({ root, name }) }),
		  renameSection: (root, from, to) => request("/section", { method: "PATCH", body: JSON.stringify({ root, from, to }) }),
		  deleteSection: (root, name) => request("/section", { method: "DELETE", params: { root, name } }),
		  config: (root) => request("/config", { params: { root } }),
		  saveConfig: (root, sections) => request("/config", { method: "PUT", body: JSON.stringify({ root, sections }) }),
		  search: (root, q) => request("/search", { params: { root, q } })
		};

		// src/client/app.tsx
		var import_jsx_runtime = require("react/jsx-runtime");
		marked.setOptions({ gfm: true, breaks: false });
		var ROOT_KEY = "dsh.tcm.root";
		var SIZE_KEY = "dsh.tcm.readSize";
		var PALETTE = ["#a8332a", "#4d6b57", "#8a6a2f", "#3f5b7a", "#6b4a7a", "#7a4a3f", "#2f6b6b"];
		function readStore(key, fallback) {
		  try {
		    return window.localStorage.getItem(key) ?? fallback;
		  } catch {
		    return fallback;
		  }
		}
		function writeStore(key, value) {
		  try {
		    window.localStorage.setItem(key, value);
		  } catch {
		  }
		}
		function renderMarkdown(markdown) {
		  const html3 = marked.parse(markdown);
		  return purify.sanitize(html3, { ADD_ATTR: ["target"] });
		}
		var stripExt = (name) => name.replace(/\.md$/i, "");
		function relativeTime(ms) {
		  if (!ms) return "\u2014";
		  const diff = Date.now() - ms;
		  const minute = 6e4;
		  if (diff < minute) return "\u521A\u521A";
		  if (diff < 60 * minute) return `${Math.floor(diff / minute)} \u5206\u949F\u524D`;
		  if (diff < 24 * 60 * minute) return `${Math.floor(diff / (60 * minute))} \u5C0F\u65F6\u524D`;
		  if (diff < 30 * 24 * 60 * minute) return `${Math.floor(diff / (24 * 60 * minute))} \u5929\u524D`;
		  return new Date(ms).toLocaleDateString("zh-CN");
		}
		var colorFor = (section, hint) => {
		  if (hint) return hint;
		  let hash = 0;
		  for (const char of section) hash = (hash * 31 + char.codePointAt(0)) % 997;
		  return PALETTE[hash % PALETTE.length];
		};
		function TcmApp() {
		  const [workspaces, setWorkspaces] = (0, import_react.useState)([]);
		  const [root, setRoot] = (0, import_react.useState)(() => readStore(ROOT_KEY, ""));
		  const [booting, setBooting] = (0, import_react.useState)(true);
		  const [sections, setSections] = (0, import_react.useState)([]);
		  const [error, setError] = (0, import_react.useState)(null);
		  const [mode, setMode] = (0, import_react.useState)("read");
		  const [view, setView] = (0, import_react.useState)({ kind: "sections" });
		  const [toast, setToast] = (0, import_react.useState)(null);
		  const [size, setSize] = (0, import_react.useState)(() => Number(readStore(SIZE_KEY, "17")) || 17);
		  const [reloadToken, setReloadToken] = (0, import_react.useState)(0);
		  const notify = (0, import_react.useCallback)((text2, kind = "info") => {
		    const next = { id: Date.now(), text: text2, kind };
		    setToast(next);
		    window.setTimeout(() => setToast((current) => current?.id === next.id ? null : current), 2600);
		  }, []);
		  const loadSections = (0, import_react.useCallback)(async (target) => {
		    if (target === "") return;
		    try {
		      const data = await api.bootstrap(target);
		      setSections(data.sections);
		      setError(null);
		    } catch (caught) {
		      setError(caught instanceof ApiError ? caught.message : String(caught));
		    }
		  }, []);
		  (0, import_react.useEffect)(() => {
		    let cancelled = false;
		    void (async () => {
		      try {
		        const data = await api.workspaces();
		        if (cancelled) return;
		        setWorkspaces(data.workspaces);
		        const saved = readStore(ROOT_KEY, "");
		        const candidate = [saved, ...data.workspaces.map((item) => item.dir)].find((dir) => dir !== "");
		        if (candidate === void 0) {
		          setError("\u8FD8\u6CA1\u6709\u767B\u8BB0\u4EFB\u4F55\u5DE5\u4F5C\u533A\uFF1A\u8BF7\u5148\u5728 DSH \u91CC\u6DFB\u52A0\u4E00\u4E2A\u5DE5\u4F5C\u533A\u3002");
		        } else {
		          setRoot(candidate);
		          writeStore(ROOT_KEY, candidate);
		          await loadSections(candidate);
		        }
		      } catch (caught) {
		        if (!cancelled) setError(caught instanceof ApiError ? caught.message : String(caught));
		      } finally {
		        if (!cancelled) setBooting(false);
		      }
		    })();
		    return () => {
		      cancelled = true;
		    };
		  }, [loadSections, reloadToken]);
		  const changeRoot = (next) => {
		    setRoot(next);
		    writeStore(ROOT_KEY, next);
		    setView({ kind: "sections" });
		    void loadSections(next);
		  };
		  const changeSize = (next) => {
		    const clamped = Math.min(24, Math.max(14, next));
		    setSize(clamped);
		    writeStore(SIZE_KEY, String(clamped));
		  };
		  const refresh = (0, import_react.useCallback)(() => {
		    setReloadToken((token) => token + 1);
		    if (root !== "") void loadSections(root);
		  }, [loadSections, root]);
		  const openSection = (section) => setView({ kind: "shelf", section });
		  const openDoc = (section, rel) => setView({ kind: "reader", section, rel });
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-root", style: { "--tcm-read-size": `${size}px` }, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      TopBar,
		      {
		        mode,
		        onMode: setMode,
		        workspaces,
		        root,
		        onRoot: changeRoot,
		        onRefresh: refresh,
		        onOpenHit: (hit) => {
		          setMode("read");
		          const section = sections.find((item) => item.id === hit.section);
		          if (section !== void 0) setView({ kind: "reader", section, rel: hit.rel });
		        },
		        notify
		      }
		    ),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-body", children: booting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-loading", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spinner" }),
		      "\u6B63\u5728\u8BFB\u53D6\u5DE5\u4F5C\u533A\u2026"
		    ] }) : error !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-empty", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-icon", children: "\u5377" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-text", children: error }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-hint", children: "\u63D2\u4EF6\u53EA\u8BFB\u53D6\u5DF2\u767B\u8BB0\u7684\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002\u786E\u8BA4\u76EE\u5F55\u5B58\u5728\u540E\u91CD\u8BD5\uFF0C\u6216\u5728\u53F3\u4FA7\u9876\u680F\u5207\u6362\u6570\u636E\u6839\u3002" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn", onClick: refresh, children: "\u91CD\u8BD5" })
		    ] }) }) : mode === "config" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      ConfigPage,
		      {
		        root,
		        sections,
		        reload: async () => {
		          await loadSections(root);
		        },
		        notify
		      }
		    ) : view.kind === "sections" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      SectionGrid,
		      {
		        sections,
		        onOpen: openSection,
		        onAdd: () => {
		          void (async () => {
		            const name = window.prompt("\u65B0\u677F\u5757\u540D\u79F0\uFF08\u4F1A\u521B\u5EFA\u4E00\u4E2A\u540C\u540D\u6587\u4EF6\u5939\uFF09", "") ?? "";
		            if (name.trim() === "") return;
		            try {
		              await api.createSection(root, name.trim());
		              await loadSections(root);
		              notify(`\u5DF2\u521B\u5EFA\u677F\u5757\u300C${name.trim()}\u300D`);
		            } catch (caught) {
		              notify(caught instanceof ApiError ? caught.message : String(caught), "error");
		            }
		          })();
		        }
		      }
		    ) : view.kind === "shelf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      Shelf,
		      {
		        root,
		        section: view.section,
		        onBack: () => setView({ kind: "sections" }),
		        onOpenDoc: (rel) => openDoc(view.section, rel),
		        onAdd: () => setMode("config"),
		        notify
		      }
		    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      Reader,
		      {
		        root,
		        section: view.section,
		        rel: view.rel,
		        size,
		        onSize: changeSize,
		        onBack: () => setView({ kind: "shelf", section: view.section }),
		        onOpenDoc: (rel) => openDoc(view.section, rel),
		        onEdit: () => setMode("config"),
		        notify
		      }
		    ) }),
		    toast !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-toast", "data-kind": toast.kind, children: toast.text })
		  ] });
		}
		function TopBar({ mode, onMode, workspaces, root, onRoot, onRefresh, onOpenHit, notify }) {
		  const [query, setQuery] = (0, import_react.useState)("");
		  const [hits, setHits] = (0, import_react.useState)(null);
		  const [searching, setSearching] = (0, import_react.useState)(false);
		  const timer = (0, import_react.useRef)(void 0);
		  (0, import_react.useEffect)(() => {
		    window.clearTimeout(timer.current);
		    const text2 = query.trim();
		    if (text2 === "" || root === "") {
		      setHits(null);
		      return void 0;
		    }
		    timer.current = window.setTimeout(() => {
		      setSearching(true);
		      api.search(root, text2).then((result) => setHits(result.hits)).catch((error) => notify(error instanceof ApiError ? error.message : String(error), "error")).finally(() => setSearching(false));
		    }, 260);
		    return () => window.clearTimeout(timer.current);
		  }, [query, root, notify]);
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "tcm-top", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-brand", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-seal", children: "\u533B" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-brand-text", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-brand-title", children: "\u4E2D\u533B\u5B66\u4E60" }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-brand-sub", children: "\u672C\u5730\u4E66\u67B6 \xB7 Markdown" })
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "tcm-tabs", "aria-label": "\u6A21\u5F0F", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-tab", "data-active": mode === "read", onClick: () => onMode("read"), children: "\u9884\u89C8" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-tab", "data-active": mode === "config", onClick: () => onMode("config"), children: "\u914D\u7F6E" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-top-spacer" }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-search", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-search-icon", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "7", cy: "7", r: "4.4", stroke: "currentColor", strokeWidth: "1.4" }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.4 10.4 14 14", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
		      ] }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		        "input",
		        {
		          value: query,
		          placeholder: "\u641C\u7D22\u4E66\u540D\u6216\u6B63\u6587\u2026",
		          onChange: (event) => setQuery(event.target.value),
		          onKeyDown: (event) => {
		            if (event.key === "Escape") {
		              setQuery("");
		              setHits(null);
		            }
		          },
		          "aria-label": "\u641C\u7D22"
		        }
		      ),
		      query.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-results", children: searching ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-loading", style: { padding: "18px 0" }, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spinner" }),
		        "\u68C0\u7D22\u4E2D\u2026"
		      ] }) : hits === null || hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-loading", style: { padding: "18px 0" }, children: "\u6CA1\u6709\u5339\u914D\u7684\u5185\u5BB9" }) : hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
		        "button",
		        {
		          type: "button",
		          className: "tcm-result",
		          onClick: () => {
		            setHits(null);
		            setQuery("");
		            onOpenHit(hit);
		          },
		          children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-result-title", children: hit.title }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-result-meta", children: [
		              hit.section,
		              " \xB7 ",
		              hit.rel
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-result-snippet", children: hit.snippet })
		          ]
		        },
		        hit.rel
		      )) })
		    ] }),
		    workspaces.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", { className: "tcm-select", value: root, onChange: (event) => onRoot(event.target.value), "aria-label": "\u6570\u636E\u6839", children: workspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: workspace.dir, children: workspace.title }, workspace.id)) }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", title: "\u91CD\u65B0\u8BFB\u53D6", onClick: onRefresh, "aria-label": "\u91CD\u65B0\u8BFB\u53D6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 8a5 5 0 1 1-1.6-3.7", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 2.4V5.2h-2.8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
		    ] }) })
		  ] });
		}
		function SectionGrid({ sections, onOpen, onAdd }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-wrap", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-crumb", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-title", children: "\u677F\u5757" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-crumb-meta", children: [
		        sections.length,
		        " \u4E2A\u677F\u5757"
		      ] })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-sections", children: [
		      sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
		        "button",
		        {
		          type: "button",
		          className: "tcm-section-card",
		          style: { "--tcm-card-color": colorFor(section.id, section.color) },
		          onClick: () => onOpen(section),
		          children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-section-name", children: section.title }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-section-count", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
		                section.docs,
		                " \u7BC7"
		              ] }),
		              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-section-dot" }),
		              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: relativeTime(section.updatedAt) })
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-section-glyph", "aria-hidden": "true", children: section.title.slice(0, 1) })
		          ]
		        },
		        section.id
		      )),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "tcm-add-card", onClick: onAdd, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "18", height: "18", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3v10M3 8h10", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" }) }),
		        "\u65B0\u589E\u677F\u5757"
		      ] })
		    ] })
		  ] });
		}
		function useMeasuredWidth() {
		  const ref = (0, import_react.useRef)(null);
		  const [width, setWidth] = (0, import_react.useState)(0);
		  (0, import_react.useEffect)(() => {
		    const node = ref.current;
		    if (node === null) return void 0;
		    const apply3 = () => setWidth(node.getBoundingClientRect().width);
		    apply3();
		    if (typeof ResizeObserver === "undefined") return void 0;
		    const observer = new ResizeObserver(apply3);
		    observer.observe(node);
		    return () => observer.disconnect();
		  }, []);
		  return [ref, width];
		}
		function Shelf({ root, section, onBack, onOpenDoc, onAdd, notify }) {
		  const [books, setBooks] = (0, import_react.useState)(null);
		  const [expanded, setExpanded] = (0, import_react.useState)(null);
		  const [areaRef, areaWidth] = useMeasuredWidth();
		  (0, import_react.useEffect)(() => {
		    let cancelled = false;
		    setBooks(null);
		    api.section(root, section.id).then((result) => {
		      if (!cancelled) setBooks(result.books);
		    }).catch((error) => {
		      if (cancelled) return;
		      setBooks([]);
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    });
		    return () => {
		      cancelled = true;
		    };
		  }, [root, section.id, notify]);
		  const cols = (0, import_react.useMemo)(() => {
		    const usable = areaWidth - SHELF_PADDING * 2 - 34;
		    if (usable <= 0) return 6;
		    return Math.max(3, Math.min(28, Math.floor((usable + SPINE_GAP) / (SPINE_W + SPINE_GAP))));
		  }, [areaWidth]);
		  const rows = (0, import_react.useMemo)(() => {
		    const list2 = books ?? [];
		    const output = [];
		    for (let index = 0; index < list2.length; index += cols) output.push(list2.slice(index, index + cols));
		    return output;
		  }, [books, cols]);
		  const accent = colorFor(section.id, section.color);
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-wrap", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-crumb", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", onClick: onBack, "aria-label": "\u8FD4\u56DE\u677F\u5757", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.8 3.6 5.4 8l4.4 4.4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-title", children: section.title }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", children: books === null ? "\u8BFB\u53D6\u4E2D\u2026" : `\u5171 ${books.length} \u5377` }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm", onClick: onAdd, children: "\u65B0\u5EFA\u5185\u5BB9" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-shelf-area", ref: areaRef, children: books === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-loading", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spinner" }),
		      "\u6B63\u5728\u7FFB\u4E66\u67B6\u2026"
		    ] }) : books.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-empty", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-icon", children: "\u67B6" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-text", children: "\u8FD9\u4E2A\u677F\u5757\u8FD8\u7A7A\u7740" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-empty-hint", children: [
		        "\u53BB\u300C\u914D\u7F6E\u300D\u91CC\u65B0\u5EFA\u4E00\u7BC7 Markdown\uFF0C\u6216\u8005\u76F4\u63A5\u628A .md \u6587\u4EF6\u653E\u8FDB",
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: (root + "\\" + section.id).replace(/\\\\/g, "\\") })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-primary", onClick: onAdd, children: "\u53BB\u914D\u7F6E" })
		    ] }) : rows.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      ShelfRow,
		      {
		        books: row,
		        accent,
		        expanded,
		        onOpenDoc,
		        onToggleSeries: (rel) => setExpanded((current) => current === rel ? null : rel)
		      },
		      rowIndex
		    )) })
		  ] });
		}
		var SPINE_W = 54;
		var SPINE_GAP = 4;
		var SHELF_PADDING = 16;
		var PAPERS = ["#efe2c6", "#e9dcc0", "#f1e7cf", "#e5d6b6", "#ece0c4", "#e7dbc6"];
		var paperFor = (name) => {
		  let hash = 0;
		  for (const char of name) hash = (hash * 31 + char.codePointAt(0)) % 997;
		  return PAPERS[hash % PAPERS.length];
		};
		var SPINE_H = 236;
		function titleSize(title) {
		  const length = title.length;
		  if (length > 14) return 12;
		  if (length > 9) return 13;
		  if (length > 6) return 14;
		  return 15;
		}
		function ShelfRow({ books, accent, expanded, onOpenDoc, onToggleSeries }) {
		  const [hover, setHover] = (0, import_react.useState)(null);
		  const heights = (0, import_react.useMemo)(() => books.map(() => SPINE_H), [books]);
		  const maxHeight = SPINE_H;
		  const rowHeight = maxHeight + 60;
		  const series = books.find((book) => book.rel === expanded);
		  const placed = (0, import_react.useMemo)(() => {
		    let cursor = 0;
		    return books.map((book, index) => {
		      const factor = hover === null ? 0 : Math.exp(-((index - hover) ** 2) / 1.6);
		      const sx = 1 + 0.55 * factor;
		      const sy = 1 + 0.1 * factor;
		      const visualWidth = SPINE_W * sx;
		      const dx = cursor - index * (SPINE_W + SPINE_GAP) - (SPINE_W - visualWidth) / 2;
		      cursor += visualWidth + SPINE_GAP;
		      return { book, index, factor, sx, sy, dx, height: heights[index] };
		    });
		  }, [books, heights, hover]);
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-shelf-block", onMouseLeave: () => setHover(null), children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		      "div",
		      {
		        className: "tcm-shelf-row",
		        style: { height: rowHeight, "--spine-w": `${SPINE_W}px` },
		        children: placed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		          Spine,
		          {
		            book: item.book,
		            accent,
		            sx: item.sx,
		            sy: item.sy,
		            dx: item.dx,
		            height: item.height,
		            open: hover === item.index,
		            onHover: () => setHover(item.index),
		            onOpen: () => {
		              if (item.book.kind === "dir") onToggleSeries(item.book.rel);
		              else onOpenDoc(item.book.rel);
		            }
		          },
		          item.book.rel
		        ))
		      }
		    ),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-shelf-board" }),
		    series !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterStrip, { book: series, onOpenDoc, onCollapse: () => onToggleSeries(series.rel) })
		  ] });
		}
		function Spine({ book, accent, sx, sy, dx, height, open, onHover, onOpen }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		    "button",
		    {
		      type: "button",
		      className: "tcm-spine",
		      "data-open": open ? "true" : "false",
		      "data-series": book.kind === "dir" ? "true" : "false",
		      style: {
		        width: SPINE_W,
		        height,
		        transform: `translate3d(${dx.toFixed(2)}px, 0, 0) scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`,
		        "--tcm-book-accent": accent,
		        "--tcm-book-bg": paperFor(book.title),
		        "--spine-title-size": `${titleSize(book.title)}px`
		      },
		      "aria-label": book.title,
		      onMouseEnter: onHover,
		      onFocus: onHover,
		      onClick: onOpen,
		      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
		        "span",
		        {
		          className: "tcm-spine-inner",
		          style: {
		            height,
		            transform: `scale(${(1 / sx).toFixed(4)}, ${(1 / sy).toFixed(4)})`,
		            "--tcm-tip-rise": `${(height * (sy - 1)).toFixed(1)}px`
		          },
		          children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spine-title", children: book.title }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spine-foot", children: book.kind === "dir" ? `${book.chapters?.length ?? 0} \u5377` : `${book.words} \u5B57` }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-spine-tip", "aria-hidden": "true", children: [
		              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: book.title }),
		              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: book.kind === "dir" ? `${book.chapters?.length ?? 0} \u5377 \xB7 ${book.words} \u5B57` : `${book.words} \u5B57` })
		            ] })
		          ]
		        }
		      )
		    }
		  );
		}
		function ChapterStrip({ book, onOpenDoc, onCollapse }) {
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel", style: { marginBottom: 26 }, children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel-head", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: book.title }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-crumb-meta", children: [
		        book.chapters?.length ?? 0,
		        " \u5377"
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: onCollapse, children: "\u6536\u8D77" })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-body", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-doc-list", children: (book.chapters ?? []).map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "tcm-row", onClick: () => onOpenDoc(chapter.rel), children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-row-title", children: stripExt(chapter.title) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-row-meta", children: [
		        chapter.words,
		        " \u5B57"
		      ] })
		    ] }, chapter.rel)) }) })
		  ] });
		}
		function Reader({ root, section, rel, size, onSize, onBack, onOpenDoc, onEdit, notify }) {
		  const [doc, setDoc] = (0, import_react.useState)(null);
		  const [books, setBooks] = (0, import_react.useState)([]);
		  const [toc, setToc] = (0, import_react.useState)([]);
		  const [progress, setProgress] = (0, import_react.useState)(0);
		  const [activeHeading, setActiveHeading] = (0, import_react.useState)("");
		  const articleRef = (0, import_react.useRef)(null);
		  const html3 = (0, import_react.useMemo)(() => doc === null ? "" : renderMarkdown(doc.content), [doc]);
		  (0, import_react.useEffect)(() => {
		    let cancelled = false;
		    setDoc(null);
		    api.doc(root, rel).then((result) => {
		      if (!cancelled) setDoc(result);
		    }).catch((error) => {
		      if (cancelled) return;
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    });
		    api.section(root, section.id).then((result) => {
		      if (!cancelled) setBooks(result.books);
		    }).catch(() => {
		    });
		    return () => {
		      cancelled = true;
		    };
		  }, [root, rel, section.id, notify]);
		  (0, import_react.useEffect)(() => {
		    const article = articleRef.current;
		    if (article === null || doc === null) return;
		    const headings = Array.from(article.querySelectorAll(".tcm-prose h2, .tcm-prose h3"));
		    setToc(headings.map((heading2, index2) => {
		      const id = `tcm-h-${index2}`;
		      heading2.id = id;
		      return { id, text: heading2.textContent ?? "", level: heading2.tagName === "H2" ? 2 : 3 };
		    }));
		  }, [html3, doc]);
		  (0, import_react.useEffect)(() => {
		    const article = articleRef.current;
		    const body = article?.closest(".tcm-body");
		    if (article === null || article === void 0 || body === null || body === void 0) return void 0;
		    const headings = () => Array.from(article.querySelectorAll(".tcm-prose h2, .tcm-prose h3"));
		    const onScroll = () => {
		      const top = body.scrollTop;
		      const total = body.scrollHeight - body.clientHeight;
		      setProgress(total <= 0 ? 0 : Math.min(1, Math.max(0, top / total)));
		      let current = "";
		      for (const heading2 of headings()) {
		        if (heading2.getBoundingClientRect().top <= 120) current = heading2.id;
		      }
		      setActiveHeading(current);
		    };
		    onScroll();
		    body.addEventListener("scroll", onScroll, { passive: true });
		    return () => body.removeEventListener("scroll", onScroll);
		  }, [html3]);
		  const flat = (0, import_react.useMemo)(() => {
		    const list2 = [];
		    for (const book of books) {
		      if (book.kind === "file") list2.push({ rel: book.rel, title: book.title });
		      else for (const chapter of book.chapters ?? []) list2.push({ rel: chapter.rel, title: stripExt(chapter.title) });
		    }
		    return list2;
		  }, [books]);
		  const index = flat.findIndex((item) => item.rel === rel);
		  const previous = index > 0 ? flat[index - 1] : void 0;
		  const next = index >= 0 && index < flat.length - 1 ? flat[index + 1] : void 0;
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-reader-bar", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", onClick: onBack, "aria-label": "\u8FD4\u56DE\u4E66\u67B6", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.8 3.6 5.4 8l4.4 4.4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-reader-title", children: doc?.title ?? "\u8BFB\u53D6\u4E2D\u2026" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", children: section.title }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", title: "\u51CF\u5C0F\u5B57\u53F7", onClick: () => onSize(size - 1), "aria-label": "\u51CF\u5C0F\u5B57\u53F7", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11 6 5l3 6M4 9h4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 8h3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
		      ] }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", style: { minWidth: 26, textAlign: "center" }, children: size }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", title: "\u589E\u5927\u5B57\u53F7", onClick: () => onSize(size + 1), "aria-label": "\u589E\u5927\u5B57\u53F7", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 11 5 5l3 6M3 9h4", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.5 8h3M12 6.5v3", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
		      ] }) }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm", onClick: onEdit, children: "\u7F16\u8F91" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-reader-progress", style: { width: `${Math.round(progress * 100)}%` } })
		    ] }),
		    doc === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-loading", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spinner" }),
		      "\u6B63\u5728\u7814\u58A8\u2026"
		    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-reader-layout", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "tcm-article", ref: articleRef, children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "tcm-doc-title", children: doc.title }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-doc-rule", children: (doc.meta.tags ?? section.title).split(",").filter(Boolean).join(" \xB7 ") || section.title }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-prose", dangerouslySetInnerHTML: { __html: html3 } }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-pager", children: [
		          previous !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "tcm-pager-item", onClick: () => onOpenDoc(previous.rel), children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-pager-kicker", children: "\u4E0A\u4E00\u5377" }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-pager-title", children: previous.title })
		          ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { flex: 1 } }),
		          next !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { type: "button", className: "tcm-pager-item", "data-dir": "next", onClick: () => onOpenDoc(next.rel), children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-pager-kicker", children: "\u4E0B\u4E00\u5377" }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-pager-title", children: next.title })
		          ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { flex: 1 } })
		        ] })
		      ] }),
		      toc.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { className: "tcm-toc", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-toc-label", children: "\u76EE \u5F55" }),
		        toc.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		          "button",
		          {
		            type: "button",
		            className: "tcm-toc-link",
		            "data-level": item.level,
		            "data-active": activeHeading === item.id,
		            onClick: () => {
		              const target = articleRef.current?.querySelector(`#${item.id}`);
		              target?.scrollIntoView({ behavior: "smooth", block: "start" });
		            },
		            children: item.text
		          },
		          item.id
		        ))
		      ] })
		    ] })
		  ] });
		}
		function ConfigPage({ root, sections, reload, notify }) {
		  const [activeId, setActiveId] = (0, import_react.useState)(sections[0]?.id ?? "");
		  const [books, setBooks] = (0, import_react.useState)(null);
		  const [editing, setEditing] = (0, import_react.useState)(null);
		  const [busy, setBusy] = (0, import_react.useState)(false);
		  (0, import_react.useEffect)(() => {
		    if (sections.length === 0) return;
		    if (!sections.some((section2) => section2.id === activeId)) setActiveId(sections[0].id);
		  }, [sections, activeId]);
		  const loadBooks = (0, import_react.useCallback)(async (sectionId) => {
		    if (sectionId === "") return;
		    setBooks(null);
		    try {
		      const result = await api.section(root, sectionId);
		      setBooks(result.books);
		    } catch (error) {
		      setBooks([]);
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  }, [root, notify]);
		  (0, import_react.useEffect)(() => {
		    void loadBooks(activeId);
		  }, [activeId, loadBooks]);
		  const openEditor = async (rel) => {
		    try {
		      const doc = await api.doc(root, rel);
		      setEditing({ rel, title: doc.title, content: doc.raw, mtime: doc.mtime, isNew: false });
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const createDoc = async (kind) => {
		    const title = window.prompt(kind === "dir" ? "\u65B0\u5957\u4E66\u540D\u79F0" : "\u65B0\u6587\u6863\u6807\u9898", "") ?? "";
		    if (title.trim() === "") return;
		    try {
		      const created = await api.createDoc(root, activeId, title.trim(), kind);
		      await Promise.all([loadBooks(activeId), reload()]);
		      await openEditor(created.rel);
		      notify("\u5DF2\u521B\u5EFA");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const renameDoc = async (rel, current) => {
		    const next = window.prompt("\u6539\u540D", stripExt(current)) ?? "";
		    if (next.trim() === "" || next.trim() === stripExt(current)) return;
		    try {
		      await api.renameDoc(root, rel, next.trim());
		      await loadBooks(activeId);
		      notify("\u5DF2\u6539\u540D");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const removeDoc = async (rel) => {
		    if (!window.confirm(`\u5220\u9664\u300C${rel}\u300D\uFF1F
		\uFF08\u4F1A\u79FB\u5165 .tcm/trash\uFF0C\u53EF\u624B\u52A8\u627E\u56DE\uFF09`)) return;
		    try {
		      await api.deleteDoc(root, rel);
		      await Promise.all([loadBooks(activeId), reload()]);
		      notify("\u5DF2\u79FB\u5165\u56DE\u6536\u7AD9");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const addSection = async () => {
		    const name = window.prompt("\u65B0\u677F\u5757\u540D\u79F0\uFF08\u540C\u540D\u6587\u4EF6\u5939\uFF09", "") ?? "";
		    if (name.trim() === "") return;
		    try {
		      await api.createSection(root, name.trim());
		      await reload();
		      notify("\u5DF2\u521B\u5EFA\u677F\u5757");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const renameSection = async (id) => {
		    const next = window.prompt("\u677F\u5757\u6539\u540D\uFF08\u4F1A\u91CD\u547D\u540D\u6587\u4EF6\u5939\uFF09", id) ?? "";
		    if (next.trim() === "" || next.trim() === id) return;
		    try {
		      await api.renameSection(root, id, next.trim());
		      await reload();
		      setActiveId(next.trim());
		      notify("\u5DF2\u6539\u540D");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const removeSection = async (id) => {
		    if (!window.confirm(`\u5220\u9664\u677F\u5757\u300C${id}\u300D\u53CA\u5176\u5168\u90E8\u5185\u5BB9\uFF1F
		\uFF08\u6574\u5939\u79FB\u5165 .tcm/trash\uFF0C\u53EF\u624B\u52A8\u627E\u56DE\uFF09`)) return;
		    try {
		      await api.deleteSection(root, id);
		      await reload();
		      notify("\u677F\u5757\u5DF2\u79FB\u5165\u56DE\u6536\u7AD9");
		    } catch (error) {
		      notify(error instanceof ApiError ? error.message : String(error), "error");
		    }
		  };
		  const save = async () => {
		    if (editing === null) return;
		    setBusy(true);
		    try {
		      const result = await api.saveDoc(root, editing.rel, editing.content, editing.isNew ? void 0 : editing.mtime);
		      setEditing({ ...editing, mtime: result.mtime, isNew: false });
		      await Promise.all([loadBooks(activeId), reload()]);
		      notify("\u5DF2\u4FDD\u5B58");
		    } catch (error) {
		      if (error instanceof ApiError && error.code === "CONFLICT") {
		        notify("\u6587\u4EF6\u5DF2\u88AB\u522B\u5904\u4FEE\u6539\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u540E\u518D\u4FDD\u5B58", "error");
		      } else {
		        notify(error instanceof ApiError ? error.message : String(error), "error");
		      }
		    } finally {
		      setBusy(false);
		    }
		  };
		  const section = sections.find((item) => item.id === activeId);
		  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-wrap", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-crumb", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-title", children: "\u914D\u7F6E" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", children: "\u677F\u5757 = \u5DE5\u4F5C\u533A\u91CC\u7684\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u6587\u4EF6\u5939\u540D\u5373\u677F\u5757\u540D" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", style: { fontFamily: "var(--tcm-mono)", fontSize: 11 }, children: root })
		    ] }),
		    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-config", children: [
		      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "tcm-panel", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel-head", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "\u677F\u5757" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm", onClick: () => void addSection(), children: "\u65B0\u589E" })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel-body", children: [
		          sections.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-note", children: "\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u65B0\u5EFA\u4E00\u4E2A\u4F1A\u5728\u5DE5\u4F5C\u533A\u91CC\u521B\u5EFA\u540C\u540D\u6587\u4EF6\u5939\u3002" }),
		          sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-row", "data-active": item.id === activeId, "data-hidden": item.hidden, onClick: () => {
		            setActiveId(item.id);
		            setEditing(null);
		          }, children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-row-dot", style: { background: colorFor(item.id, item.color) } }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-row-title", children: item.title }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-row-meta", children: item.docs }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		              "button",
		              {
		                type: "button",
		                className: "tcm-icon-btn",
		                title: "\u6539\u540D",
		                onClick: (event) => {
		                  event.stopPropagation();
		                  void renameSection(item.id);
		                },
		                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", children: [
		                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 13h2.2l7.1-7.1-2.2-2.2L3 10.8V13Z", stroke: "currentColor", strokeWidth: "1.3", strokeLinejoin: "round" }),
		                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m10.6 4.2 1.2-1.2 2.2 2.2-1.2 1.2", stroke: "currentColor", strokeWidth: "1.3", strokeLinejoin: "round" })
		                ] })
		              }
		            ),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		              "button",
		              {
		                type: "button",
		                className: "tcm-icon-btn",
		                title: "\u5220\u9664",
		                onClick: (event) => {
		                  event.stopPropagation();
		                  void removeSection(item.id);
		                },
		                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 5h8M6.5 5V3.6h3V5M5.2 5l.6 8h4.4l.6-8", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) })
		              }
		            )
		          ] }, item.id))
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-note", children: "\u9605\u8BFB\u72B6\u6001\u3001\u9605\u8BFB\u8FDB\u5EA6\u53EA\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668\uFF1B\u5185\u5BB9\u5168\u90E8\u662F\u5DE5\u4F5C\u533A\u91CC\u7684 .md \u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u4EFB\u4F55\u7F16\u8F91\u5668\u6539\u3002" })
		      ] }),
		      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { className: "tcm-panel", children: editing !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel-head", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-icon-btn", onClick: () => setEditing(null), "aria-label": "\u8FD4\u56DE", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "15", height: "15", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.8 3.6 5.4 8l4.4 4.4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontFamily: "var(--tcm-mono)", fontSize: 12 }, children: editing.rel }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-primary", disabled: busy, onClick: () => void save(), children: busy ? "\u4FDD\u5B58\u4E2D\u2026" : "\u4FDD\u5B58" })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-body", style: { background: "var(--tcm-paper)" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-editor", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-editor-pane", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
		            "textarea",
		            {
		              className: "tcm-textarea",
		              value: editing.content,
		              spellCheck: false,
		              onChange: (event) => setEditing({ ...editing, content: event.target.value }),
		              onKeyDown: (event) => {
		                if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
		                  event.preventDefault();
		                  void save();
		                }
		              },
		              placeholder: "# \u6807\u9898"
		            }
		          ) }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-editor-pane", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-editor-preview", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-prose", dangerouslySetInnerHTML: { __html: renderMarkdown(editing.content) } }) }) })
		        ] }) })
		      ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-panel-head", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: section?.title ?? "\u6587\u6863" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-meta", children: books === null ? "\u8BFB\u53D6\u4E2D\u2026" : `${books.length} \u5377` }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-crumb-spacer" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm", onClick: () => void createDoc("file"), disabled: activeId === "", children: "\u65B0\u5EFA\u6587\u6863" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm", onClick: () => void createDoc("dir"), disabled: activeId === "", children: "\u65B0\u5EFA\u5957\u4E66" })
		        ] }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-body", children: books === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-loading", children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-spinner" }),
		          "\u8BFB\u53D6\u4E2D\u2026"
		        ] }) : books.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-empty", style: { padding: "46px 16px" }, children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-icon", children: "\u7A7A" }),
		          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-empty-text", children: "\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5185\u5BB9" })
		        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-doc-list", children: books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-row", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-row-title", onClick: () => void openEditor(book.kind === "file" ? book.rel : book.chapters?.[0]?.rel ?? book.rel), style: { cursor: "pointer" }, children: [
		              book.kind === "dir" ? "\u{1F4DA} " : "",
		              book.title
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-row-meta", children: [
		              book.words,
		              " \u5B57"
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: () => void openEditor(book.kind === "file" ? book.rel : book.chapters?.[0]?.rel ?? book.rel), children: "\u7F16\u8F91" }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: () => void renameDoc(book.rel, book.name), children: "\u6539\u540D" }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: () => void removeDoc(book.rel), children: "\u5220\u9664" })
		          ] }),
		          book.kind === "dir" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { paddingLeft: 20 }, children: (book.chapters ?? []).map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcm-row", children: [
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tcm-row-title", onClick: () => void openEditor(chapter.rel), style: { cursor: "pointer", opacity: 0.9 }, children: stripExt(chapter.title) }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "tcm-row-meta", children: [
		              chapter.words,
		              " \u5B57"
		            ] }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: () => void openEditor(chapter.rel), children: "\u7F16\u8F91" }),
		            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "tcm-btn tcm-btn-sm tcm-btn-ghost", onClick: () => void removeDoc(chapter.rel), children: "\u5220\u9664" })
		          ] }, chapter.rel)) })
		        ] }, book.rel)) }) }),
		        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tcm-panel-note", children: "\u652F\u6301 Markdown \u5168\u6587\uFF08\u6807\u9898\u3001\u5F15\u7528\u3001\u8868\u683C\u3001\u4EE3\u7801\u5757\uFF09\u3002\u4FDD\u5B58\u65F6\u7528 Ctrl/\u2318 + S \u4E5F\u53EF\u4EE5\u3002" })
		      ] }) })
		    ] })
		  ] });
		}

		// src/client/styles.ts
		var CSS = String.raw`
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
		`;
		var injected = false;
		function installStyles() {
		  if (injected || typeof document === "undefined") return;
		  injected = true;
		  const style = document.createElement("style");
		  style.dataset.dshPlugin = "dsh-plugin-tcm-learning";
		  style.textContent = CSS;
		  document.head.appendChild(style);
		}

		// src/client/index.tsx
		var import_jsx_runtime2 = require("react/jsx-runtime");
		var inject = ["slots", "layout"];
		var PanelBoundary = class extends import_react2.Component {
		  state = { error: null };
		  static getDerivedStateFromError(error) {
		    return { error };
		  }
		  render() {
		    if (this.state.error !== null) {
		      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "tcm-root", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "tcm-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "tcm-empty", children: [
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "tcm-empty-icon", children: "\u8BEF" }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "tcm-empty-text", children: "\u4E2D\u533B\u5B66\u4E60\u9762\u677F\u6E32\u67D3\u51FA\u9519" }),
		        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "tcm-empty-hint", style: { fontFamily: "var(--tcm-mono)", fontSize: 11 }, children: String(this.state.error?.message ?? this.state.error) })
		      ] }) }) });
		    }
		    return this.props.children;
		  }
		};
		function TcmIcon(props) {
		  const size = props.size ?? 16;
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
		      "path",
		      {
		        d: "M4.6 3.8h5.6a2.1 2.1 0 0 1 2.1 2.1v10.3H6.7a2.1 2.1 0 0 1-2.1-2.1V3.8Z",
		        stroke: "currentColor",
		        strokeWidth: "1.4",
		        strokeLinejoin: "round"
		      }
		    ),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12.3 6.2h1.2a1.9 1.9 0 0 1 1.9 1.9v6.1", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.5" }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M7.2 7.6h3M7.2 10.4h3", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", opacity: "0.85" }),
		    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "14.1", y: "14.4", width: "3", height: "3", rx: "0.6", fill: "currentColor", opacity: "0.85" })
		  ] });
		}
		function TcmPanel() {
		  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PanelBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TcmApp, {}) });
		}
		function contribute(ctx, slot, register, label) {
		  ctx.effect(() => {
		    const dispose = ctx.slots.inject(slot, register);
		    return () => {
		      if (typeof dispose === "function") dispose();
		    };
		  }, label);
		}
		function apply2(ctx) {
		  installStyles();
		  contribute(ctx, "sidebar.panellist", () => ctx.slots.register({
		    name: "sidebar.panellist",
		    id: "tcm-learning",
		    order: 10,
		    label: "\u4E2D\u533B\u5B66\u4E60"
		  }, TcmIcon), "tcm-learning: sidebar entry");
		  contribute(ctx, "main", () => ctx.slots.register({
		    name: "main",
		    key: "tcm-learning"
		  }, TcmPanel), "tcm-learning: main panel");
		}
		/*! Bundled license information:

		dompurify/dist/purify.es.mjs:
		  (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
		*/

		return module.exports;
	}
});
