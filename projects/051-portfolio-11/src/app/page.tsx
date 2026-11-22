'use client';

import { useCallback, useEffect, useState } from 'react';

type Item = {
  id: number; title: string; content: string; author: string;
  likes: number; views: number; createdAt: string;
};
type Comment = { id: number; author: string; text: string; createdAt: string };

const RESOURCE = 'projects';
const LABEL = '프로젝트';

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
    const res = await fetch('/api/admin/stats');
    setStats(await res.json());
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




  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="py-10 sm:py-14">
        <p className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">포트폴리오 웹사이트</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">다국어 포트폴리오</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">한국어와 영어 두 버전의 프로젝트 설명을 DB에 저장하고 언어 버튼으로 전환하는 포트폴리오입니다. 관리자 페이지에서 두 언어를 함께 수정합니다.</p>
      </header>

      {stats && (
        <section className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalItems}</b><span className="text-xs text-zinc-400">전체 항목</span></div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalViews}</b><span className="text-xs text-zinc-400">총 조회수</span></div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalLikes}</b><span className="text-xs text-zinc-400">총 좋아요</span></div>
        </section>
      )}

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-bold">새 프로젝트 등록</h2>
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

          </div>
        </form>
      </section>

      <section className="py-8">
        <h2 className="text-lg font-bold">프로젝트 목록 <span className="text-zinc-500">({items.length}개)</span></h2>
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
          {items.length === 0 && <p className="text-zinc-500">아직 등록된 프로젝트이 없습니다. 첫 프로젝트을 등록해 보세요.</p>}
        </div>
      </section>
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Prisma · SQLite
      </footer>
    </div>
  );
}
