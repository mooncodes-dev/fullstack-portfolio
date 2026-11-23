'use client';

import { useCallback, useEffect, useState } from 'react';

type Item = {
  id: number; title: string; content: string; author: string;
  likes: number; views: number; createdAt: string;
};
type Comment = { id: number; author: string; text: string; createdAt: string };

const RESOURCE = 'posts';
const LABEL = '글';

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


async function authCall(route: string) {
    const res = await fetch('/api/auth/' + route, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await res.json();
    if (route === 'login' && data.token) {
      setToken(data.token);
      setUserName(data.name);
      localStorage.setItem('token', data.token);
    } else if (route === 'register' && data.id) {
      alert('회원가입 완료! 이제 로그인하세요.');
    } else if (data.error) {
      alert(data.error);
    }
  }


  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="py-10 sm:py-14">
        <p className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">간단한 블로그</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">영화 리뷰 블로그</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">본 영화의 평점과 리뷰를 기록하고, 장르별로 글을 검색할 수 있다. 회원가입과 로그인으로 나만의 리뷰를 관리할 수 있다.</p>
      </header>
      <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-bold">로그인 / 회원가입</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="비밀번호" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 (회원가입용)" className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button onClick={() => authCall('login')} className="rounded-lg bg-[var(--color-accent)] px-4 py-2 font-bold text-zinc-950">로그인</button>
          <button onClick={() => authCall('register')} className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-200">회원가입</button>
          <span className="text-xs text-zinc-500">{userName ? userName + '님 로그인됨' : '데모 계정: demo@example.com / demo1234'}</span>
        </div>
      </section>


      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-bold">새 글 등록</h2>
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
      <section className="mt-6 flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="검색어 입력" className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
        <button onClick={() => load(q)} className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 font-bold text-zinc-950">검색</button>
      </section>

      <section className="py-8">
        <h2 className="text-lg font-bold">글 목록 <span className="text-zinc-500">({items.length}개)</span></h2>
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
          {items.length === 0 && <p className="text-zinc-500">아직 등록된 글이 없습니다. 첫 글을 등록해 보세요.</p>}
        </div>
      </section>
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Prisma · SQLite
      </footer>
    </div>
  );
}
