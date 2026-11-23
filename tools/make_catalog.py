#!/usr/bin/env python3
"""Build a single responsive catalog webpage (index.html) from catalog.json."""
import json
from pathlib import Path

ROOT = Path.home() / "workspace" / "fullstack-projects"
REPO = "https://github.com/mooncodes-dev/fullstack-portfolio/tree/main/projects"

HTML = """<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>풀스택 프로젝트 __TOTAL__ — Moon Codes</title>
<style>
  * { box-sizing: border-box; margin: 0; }
  body { font-family: system-ui, 'Segoe UI', sans-serif; background: #0b0e14; color: #e8eaf0; }
  header { max-width: 1200px; margin: 0 auto; padding: 48px 20px 8px; }
  h1 { font-size: clamp(26px, 5vw, 42px); font-weight: 800; }
  h1 span { color: #38bdf8; }
  .sub { color: #9aa3b5; margin-top: 10px; line-height: 1.6; max-width: 720px; }
  .stack { color: #6b7380; font-size: 13px; margin-top: 8px; }
  .controls { max-width: 1200px; margin: 0 auto; padding: 20px; display: flex; flex-direction: column; gap: 12px; }
  #search { width: 100%; padding: 13px 16px; border-radius: 12px; border: 1px solid #262b36; background: #12151d; color: #e8eaf0; font-size: 15px; }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { padding: 7px 14px; border-radius: 999px; border: 1px solid #2c3242; background: transparent; color: #c3c9d6; cursor: pointer; font-size: 13.5px; }
  .chip.on { background: #38bdf8; color: #0b0e14; border-color: #38bdf8; font-weight: 700; }
  main { max-width: 1200px; margin: 0 auto; padding: 4px 20px 60px; }
  #count { color: #9aa3b5; font-size: 14px; margin: 6px 0 16px; }
  .grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
  .card { background: #12151d; border: 1px solid #232836; border-radius: 14px; padding: 18px; display: flex; flex-direction: column; gap: 8px; }
  .card:hover { border-color: #38bdf8; }
  .top { display: flex; justify-content: space-between; align-items: center; }
  .num { color: #38bdf8; font-weight: 800; font-size: 13px; }
  .diff { font-size: 12px; color: #facc15; border: 1px solid #4a3f14; padding: 2px 8px; border-radius: 999px; }
  .card h3 { font-size: 16.5px; line-height: 1.4; }
  .cat { color: #9aa3b5; font-size: 12.5px; }
  .desc { color: #a7adbd; font-size: 13.5px; line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }
  .tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .tag { font-size: 11.5px; background: #1b2130; color: #8fd8ff; padding: 3px 8px; border-radius: 6px; }
  .go { margin-top: 4px; text-align: center; background: #38bdf8; color: #0b0e14; font-weight: 700; text-decoration: none; padding: 10px; border-radius: 10px; font-size: 14px; }
  footer { text-align: center; color: #5d6480; padding: 30px; font-size: 13px; }
</style>
</head>
<body>
<header>
  <h1>풀스택 프로젝트 <span>__TOTAL__</span></h1>
  <p class="sub">초보자가 끝까지 만들어보는 풀스택 포트폴리오 프로젝트 __TOTAL__선. 전부 실제로 동작하는 코드입니다 — 회원가입·로그인, DB CRUD, 댓글, 좋아요, 검색, 파일 업로드, 관리자 통계까지 주제별로 구현되어 있어요.</p>
  <p class="stack">Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Prisma · SQLite — 반응형 UI</p>
</header>
<div class="controls">
  <input id="search" placeholder="프로젝트 검색 (예: 블로그, 레시피, 좋아요)">
  <div class="chips" id="chips"></div>
</div>
<main>
  <p id="count"></p>
  <div class="grid" id="grid"></div>
</main>
<footer>Moon Codes · 매일 200개씩 새 프로젝트가 추가됩니다</footer>
<script>
const DATA = __DATA__;
const REPO = '__REPO__';
const FEAT = { auth: '로그인/회원가입', comments: '댓글', likes: '좋아요', search: '검색', upload: '파일 업로드', admin: '관리자 통계' };
const cats = ['전체', ...new Set(DATA.map(d => d.category))];
let curCat = '전체', curQ = '';
const chipsEl = document.getElementById('chips');
cats.forEach(c => {
  const b = document.createElement('button');
  b.className = 'chip' + (c === '전체' ? ' on' : '');
  b.textContent = c;
  b.onclick = () => { curCat = c; document.querySelectorAll('.chip').forEach(x => x.classList.toggle('on', x.textContent === c)); render(); };
  chipsEl.appendChild(b);
});
document.getElementById('search').addEventListener('input', e => { curQ = e.target.value.trim(); render(); });
function render() {
  const list = DATA.filter(d =>
    (curCat === '전체' || d.category === curCat) &&
    (!curQ || (d.title + ' ' + d.desc + ' ' + d.category).includes(curQ)));
  document.getElementById('count').textContent = list.length + '개 프로젝트';
  document.getElementById('grid').innerHTML = list.map(d => `
    <article class="card">
      <div class="top"><span class="num">No. ${d.num}</span><span class="diff">${d.difficulty}</span></div>
      <h3>${d.title}</h3>
      <p class="cat">${d.category}</p>
      <p class="desc">${d.desc}</p>
      <div class="tags">${d.features.map(f => '<span class="tag">' + (FEAT[f] || f) + '</span>').join('')}<span class="tag">CRUD</span></div>
      <a class="go" href="${REPO}/${d.folder}" target="_blank" rel="noopener">GitHub에서 코드 보기</a>
    </article>`).join('');
}
render();
</script>
</body>
</html>
"""

def main():
    catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))
    html = HTML.replace("__DATA__", json.dumps(catalog, ensure_ascii=False)).replace("__REPO__", REPO).replace("__TOTAL__", str(len(catalog)))
    (ROOT / "index.html").write_text(html, encoding="utf-8")
    print("catalog index.html written", len(html), "bytes")

if __name__ == "__main__":
    main()
