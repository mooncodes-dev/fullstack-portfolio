'use client';

import { useCallback, useEffect, useState } from 'react';

type Item = {
  id: number; title: string; content: string; author: string;
  likes: number; views: number; createdAt: string;
};
type Comment = { id: number; author: string; text: string; createdAt: string };

const RESOURCE = 'trips';
const LABEL = '여행 기록';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [q, setQ] = useState('');
  const [openComments, setOpenComments] = useState<number | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [stats, setStats] = useState<{ totalItems: number; totalViews: number; totalLikes: number } | null>(null);
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo1234');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const load = useCallback(async (query = '') => {
    const res = await fetch('/api/' + RESOURCE + (query ? '?q=' + encodeURIComponent(query) : ''));
    const data = await res.json();
    setItems(data.items || []);
  }, []);

  const loadStats = useCallback(async () => {
    
  }, []);

  useEffect(() => { load(); loadStats(); }, [load, loadStats]);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/' + RESOURCE, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author: author || undefined }),
    });
    setTitle(''); setContent('');
    load(q); loadStats();
  }

  async function remove(id: number) {
    if (!confirm('삭제할까요?')) return;
    await fetch('/api/' + RESOURCE + '/' + id, { method: 'DELETE' });
    load(q); loadStats();
  }



async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    if (data.url) alert('업로드 완료: ' + data.url);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="py-10 sm:py-14">
        <p className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">여행 일지 공유 사이트</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">미식 여행 일지 사이트</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">여행지에서 먹은 음식을 기록하는 사이트이다. 음식 사진을 파일 업로드로 첨부하고 이름을 검색해 맛집을 찾아볼 수 있다.</p>
      </header>


      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-bold">새 여행 기록 등록</h2>
        <form onSubmit={create} className="mt-4 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder={LABEL + ' 제목'}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 outline-none focus:border-[var(--color-accent)]" />
            <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="작성자 (선택)"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 outline-none focus:border-[var(--color-accent)]" />
          </div>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={3} placeholder="내용을 입력하세요"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 outline-none focus:border-[var(--color-accent)]" />
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 font-bold text-zinc-950 transition hover:opacity-90">등록하기</button>
<input id="file-input" type="file" className="hidden" onChange={uploadFile} />
            <button type="button" onClick={() => document.getElementById('file-input')?.click()} className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-200">파일 업로드</button>

          </div>
        </form>
      </section>
      <section className="mt-6 flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="검색어 입력" className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
        <button onClick={() => load(q)} className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 font-bold text-zinc-950">검색</button>
      </section>

      <section className="py-8">
        <h2 className="text-lg font-bold">여행 기록 목록 <span className="text-zinc-500">({items.length}개)</span></h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.id} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <h3 className="font-bold leading-snug">{it.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{it.content}</p>
              <p className="mt-3 text-xs text-zinc-500">{it.author} · 조회 {it.views} · {new Date(it.createdAt).toLocaleDateString('ko-KR')}</p>
              <div className="mt-3 flex flex-wrap gap-2">


                <button onClick={() => remove(it.id)} className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-red-400 hover:text-red-300">삭제</button>
              </div>

            </article>
          ))}
          {items.length === 0 && <p className="text-zinc-500">아직 등록된 여행 기록이 없습니다. 첫 여행 기록을 등록해 보세요.</p>}
        </div>
      </section>
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Prisma · SQLite
      </footer>
    </div>
  );
}
