#!/usr/bin/env python3
"""Generate 200 modern full-stack projects (Next.js 15 + React 19 + TS + Tailwind v4 + Prisma)
from the topics in README.md. Each project: responsive UI, REST API routes, Prisma schema,
feature flags (auth/comments/likes/search/upload/admin) detected from the topic description."""
import json, re
from pathlib import Path

ROOT = Path.home() / "workspace" / "fullstack-projects"
SRC = ROOT / "days-TOPICS-2026-11-25.md"
OUT = ROOT / "projects" / "day-2026-11-25"

CATEGORIES = {
    1:  dict(slug="intro",     resource="entries",   model="Entry",   label="항목",     accent="#f59e0b"),
    2:  dict(slug="blog",      resource="posts",     model="Post",    label="글",       accent="#38bdf8"),
    3:  dict(slug="portfolio", resource="projects",  model="Project", label="프로젝트", accent="#a78bfa"),
    4:  dict(slug="recipes",   resource="recipes",   model="Recipe",  label="레시피",   accent="#fb7185"),
    5:  dict(slug="fitness",   resource="workouts",  model="Workout", label="운동 기록", accent="#34d399"),
    6:  dict(slug="travel",    resource="trips",     model="Trip",    label="여행 기록", accent="#22d3ee"),
    7:  dict(slug="music",     resource="tracks",    model="Track",   label="곡",       accent="#f472b6"),
    8:  dict(slug="forum",     resource="threads",   model="Thread",  label="게시글",   accent="#facc15"),
    9:  dict(slug="shop",      resource="products",  model="Product", label="상품",     accent="#4ade80"),
    10: dict(slug="weather",   resource="reports",   model="Report",  label="날씨 기록", accent="#60a5fa"),
}

def parse_topics():
    text = SRC.read_text(encoding="utf-8")
    topics, cat, cat_name = [], None, None
    for line in text.splitlines():
        m = re.match(r"^## (\d+)\.\s*(.+)$", line)
        if m:
            cat, cat_name = int(m.group(1)), m.group(2).strip(); continue
        m = re.match(r"^(\d+)\.\s*\*\*(.+?)\*\*\s*—\s*(.+)$", line)
        if m and cat:
            topics.append(dict(num=int(m.group(1)), title=m.group(2).strip(),
                               desc=m.group(3).strip(), cat=cat, cat_name=cat_name))
    return topics

def features(desc):
    f = []
    if re.search(r"회원가입|로그인", desc): f.append("auth")
    if "댓글" in desc: f.append("comments")
    if "좋아요" in desc: f.append("likes")
    if "검색" in desc: f.append("search")
    if re.search(r"업로드|파일", desc): f.append("upload")
    if "관리자" in desc: f.append("admin")
    return f

def difficulty(idx):
    return "입문" if idx <= 7 else ("기본" if idx <= 14 else "심화")

# ---------------- shared static files ----------------
TSCONFIG = """{
  "compilerOptions": {
    "target": "ES2022", "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true, "skipLibCheck": true, "strict": true, "noEmit": true,
    "esModuleInterop": true, "module": "esnext", "moduleResolution": "bundler",
    "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve",
    "incremental": true, "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
"""

NEXT_CONFIG = """import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
"""

POSTCSS = """const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
"""

DB_TS = """import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
"""

AUTH_TS = """import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'dev-secret-change-me');

export async function hashPassword(pw: string) {
  return bcrypt.hash(pw, 10);
}
export async function verifyPassword(pw: string, hash: string) {
  return bcrypt.compare(pw, hash);
}
export async function signToken(payload: { id: number; email: string }) {
  return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('7d').sign(secret);
}
export async function getUserFromRequest(req: Request) {
  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  try {
    const { payload } = await jwtVerify(auth.slice(7), secret);
    return payload as unknown as { id: number; email: string };
  } catch {
    return null;
  }
}
"""

LAYOUT = """import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {title_js},
  description: {desc_js},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
"""

GLOBALS_CSS = """@import "tailwindcss";

@theme inline {
  --color-accent: {accent};
}

html { color-scheme: dark; }
body { font-family: ui-sans-system, system-ui, 'Segoe UI', sans-serif; }
"""

# ---------------- per-project templates ----------------
PACKAGE_JSON = """{{
  "name": "{pkg}",
  "version": "1.0.0",
  "private": true,
  "scripts": {{
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "db:push": "prisma db push",
    "db:seed": "prisma db seed"
  }},
  "prisma": {{ "seed": "tsx prisma/seed.ts" }},
  "dependencies": {{
    "@prisma/client": "^6.2.0",
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "zod": "^3.24.0"{auth_deps}
  }},
  "devDependencies": {{
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "prisma": "^6.2.0",
    "tailwindcss": "^4.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.7.0"{auth_devdeps}
  }}
}}
"""

SCHEMA = """generator client {{
  provider = "prisma-client-js"
}}

datasource db {{
  provider = "sqlite"
  url      = env("DATABASE_URL")
}}

model {model} {{
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  author    String   @default("익명")
  likes     Int      @default(0)
  views     Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
{relations}
}}
{extra_models}"""

COMMENT_MODEL = """
model Comment {
  id        Int      @id @default(autoincrement())
  text      String
  author    String   @default("익명")
  createdAt DateTime @default(now())
  {lower}   {model}    @relation(fields: [{lower}Id], references: [id], onDelete: Cascade)
  {lower}Id Int
}
"""

USER_MODEL = """
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
}
"""

SEED_TS = """import { PrismaClient } from '@prisma/client';
{auth_import}
const prisma = new PrismaClient();

async function main() {
{auth_seed}
  await prisma.{lower}.createMany({
    data: [
{seed_rows}
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
"""

API_LIST = """import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const createSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().max(5000).default(''),
  author: z.string().max(40).optional(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  const items = await prisma.{lower}.findMany({
    where: q ? { OR: [{ title: { contains: q } }, { content: { contains: q } }] } : undefined,
    orderBy: { id: 'desc' },
    take: 100,
  });
  return NextResponse.json({ items, total: items.length });
}

export async function POST(req: Request) {
  const parsed = createSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: 'invalid body' }, { status: 400 });
  const item = await prisma.{lower}.create({ data: parsed.data });
  return NextResponse.json(item, { status: 201 });
}
"""

API_ITEM = """import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const item = await prisma.{lower}.update({
    where: { id },
    data: { views: { increment: 1 } },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const body = await req.json().catch(() => ({}));
  const item = await prisma.{lower}.update({
    where: { id },
    data: { title: body.title, content: body.content },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  await prisma.{lower}.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
"""

API_LIKE = """import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const item = await prisma.{lower}.update({
    where: { id },
    data: { likes: { increment: 1 } },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ id: item.id, likes: item.likes });
}
"""

API_COMMENTS = """import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const items = await prisma.comment.findMany({ where: { {lower}Id: id }, orderBy: { id: 'asc' } });
  return NextResponse.json({ items });
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const body = await req.json().catch(() => ({}));
  if (!body.text) return NextResponse.json({ error: 'text is required' }, { status: 400 });
  const comment = await prisma.comment.create({
    data: { text: String(body.text), author: String(body.author || '익명'), {lower}Id: id },
  });
  return NextResponse.json(comment, { status: 201 });
}
"""

API_AUTH = """import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword, verifyPassword, signToken } from '@/lib/auth';

export async function POST(req: Request, { params }: { params: Promise<{ action: string[] }> }) {
  const { action } = await params;
  const body = await req.json().catch(() => ({}));
  const route = action?.[0];

  if (route === 'register') {
    if (!body.email || !body.password) return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    const exists = await prisma.user.findUnique({ where: { email: body.email } });
    if (exists) return NextResponse.json({ error: 'already registered' }, { status: 409 });
    const user = await prisma.user.create({
      data: { email: body.email, password: await hashPassword(body.password), name: body.name || '사용자' },
    });
    return NextResponse.json({ id: user.id, email: user.email, name: user.name }, { status: 201 });
  }
  if (route === 'login') {
    const user = await prisma.user.findUnique({ where: { email: body.email || '' } });
    if (!user || !(await verifyPassword(body.password || '', user.password))) {
      return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });
    }
    const token = await signToken({ id: user.id, email: user.email });
    return NextResponse.json({ token, name: user.name, email: user.email });
  }
  return NextResponse.json({ error: 'unknown action' }, { status: 404 });
}
"""

API_ADMIN = """import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const [totalItems, views, likes] = await Promise.all([
    prisma.{lower}.count(),
    prisma.{lower}.aggregate({ _sum: { views: true } }),
    prisma.{lower}.aggregate({ _sum: { likes: true } }),
  ]);
  return NextResponse.json({
    totalItems,
    totalViews: views._sum.views || 0,
    totalLikes: likes._sum.likes || 0,
  });
}
"""

API_UPLOAD = """import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const file = form?.get('file');
  if (!file || typeof file === 'string') return NextResponse.json({ error: 'file is required' }, { status: 400 });
  const bytes = Buffer.from(await file.arrayBuffer());
  const dir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(dir, { recursive: true });
  const name = Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  await writeFile(path.join(dir, name), bytes);
  return NextResponse.json({ url: '/uploads/' + name }, { status: 201 });
}
"""

PAGE_TSX = r"""'use client';

import { useCallback, useEffect, useState } from 'react';

type Item = {
  id: number; title: string; content: string; author: string;
  likes: number; views: number; createdAt: string;
};
type Comment = { id: number; author: string; text: string; createdAt: string };

const RESOURCE = '{resource}';
const LABEL = '{label}';

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
    {stats_fetch}
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
{like_fn}
{comment_fn}
{auth_fn}
{upload_fn}
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="py-10 sm:py-14">
        <p className="text-sm font-semibold tracking-widest text-[var(--color-accent)]">{cat_name}</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">{desc}</p>
      </header>
{auth_ui}
{admin_ui}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-bold">새 {label} 등록</h2>
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
{upload_ui}
          </div>
        </form>
      </section>
{search_ui}
      <section className="py-8">
        <h2 className="text-lg font-bold">{label} 목록 <span className="text-zinc-500">({items.length}개)</span></h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.id} className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <h3 className="font-bold leading-snug">{it.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{it.content}</p>
              <p className="mt-3 text-xs text-zinc-500">{it.author} · 조회 {it.views} · {new Date(it.createdAt).toLocaleDateString('ko-KR')}</p>
              <div className="mt-3 flex flex-wrap gap-2">
{like_btn}
{comment_btn}
                <button onClick={() => remove(it.id)} className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-red-400 hover:text-red-300">삭제</button>
              </div>
{comment_box}
            </article>
          ))}
          {items.length === 0 && <p className="text-zinc-500">아직 등록된 {label}이 없습니다. 첫 {label}을 등록해 보세요.</p>}
        </div>
      </section>
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Prisma · SQLite
      </footer>
    </div>
  );
}
"""

README_TMPL = """# {title}

> {cat_name} · 난이도 {difficulty} · 풀스택 프로젝트 #{num}

{desc}

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)
{auth_line}

## 핵심 기능

{feature_lines}
- {label} CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
- 시드 데이터 포함 — 설치 후 바로 화면에서 확인 가능

## 실행 방법

```bash
npm install
cp .env.example .env
npm run db:push     # DB 테이블 생성
npm run db:seed     # 샘플 데이터 입력
npm run dev         # http://localhost:3000
```

{auth_demo}
## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/{resource}` | {label} 목록 (최신순) |
| POST | `/api/{resource}` | {label} 등록 |
| GET | `/api/{resource}/[id]` | {label} 상세 (조회수 +1) |
| PUT | `/api/{resource}/[id]` | {label} 수정 |
| DELETE | `/api/{resource}/[id]` | {label} 삭제 |
{api_extra}
## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트){auth_lib}
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
"""

ENV_EXAMPLE = """DATABASE_URL="file:./dev.db"
JWT_SECRET="change-me-in-production"
"""

GITIGNORE = """node_modules
.next
*.db
.env
public/uploads
"""

def build_page(t, c, feats):
    p = PAGE_TSX
    # block snippets first
    p = p.replace("{stats_fetch}", "const res = await fetch('/api/admin/stats');\n    setStats(await res.json());" if "admin" in feats else "")
    p = p.replace("{like_fn}", """async function like(id: number) {
    const res = await fetch('/api/' + RESOURCE + '/' + id + '/like', { method: 'POST' });
    const data = await res.json();
    setItems((prev) => prev.map((x) => (x.id === id ? { ...x, likes: data.likes } : x)));
    loadStats();
  }
""" if "likes" in feats else "")
    p = p.replace("{comment_fn}", """async function loadComments(id: number) {
    const res = await fetch('/api/' + RESOURCE + '/' + id + '/comments');
    const data = await res.json();
    setComments(data.items || []);
  }
  async function toggleComments(id: number) {
    if (openComments === id) { setOpenComments(null); return; }
    setOpenComments(id);
    loadComments(id);
  }
  async function addComment(id: number) {
    if (!commentText.trim()) return;
    await fetch('/api/' + RESOURCE + '/' + id + '/comments', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: commentText, author: author || undefined }),
    });
    setCommentText('');
    loadComments(id);
  }
""" if "comments" in feats else "")
    p = p.replace("{auth_fn}", """async function authCall(route: string) {
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
""" if "auth" in feats else "")
    p = p.replace("{upload_fn}", """async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    if (data.url) alert('업로드 완료: ' + data.url);
  }
""" if "upload" in feats else "")
    p = p.replace("{auth_ui}", """      <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-6">
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
""" if "auth" in feats else "")
    p = p.replace("{admin_ui}", """      {stats && (
        <section className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalItems}</b><span className="text-xs text-zinc-400">전체 항목</span></div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalViews}</b><span className="text-xs text-zinc-400">총 조회수</span></div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 text-center"><b className="block text-2xl text-[var(--color-accent)]">{stats.totalLikes}</b><span className="text-xs text-zinc-400">총 좋아요</span></div>
        </section>
      )}
""" if "admin" in feats else "")
    p = p.replace("{search_ui}", """      <section className="mt-6 flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="검색어 입력" className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5" />
        <button onClick={() => load(q)} className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 font-bold text-zinc-950">검색</button>
      </section>
""" if "search" in feats else "")
    p = p.replace("{upload_ui}", """<input id="file-input" type="file" className="hidden" onChange={uploadFile} />
            <button type="button" onClick={() => document.getElementById('file-input')?.click()} className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-200">파일 업로드</button>
""" if "upload" in feats else "")
    p = p.replace("{like_btn}", """<button onClick={() => like(it.id)} className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-xs font-bold text-zinc-950">좋아요 {it.likes}</button>
""" if "likes" in feats else "")
    p = p.replace("{comment_btn}", """<button onClick={() => toggleComments(it.id)} className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300">댓글</button>
""" if "comments" in feats else "")
    p = p.replace("{comment_box}", """              {openComments === it.id && (
                <div className="mt-3 border-t border-dashed border-zinc-700 pt-3">
                  {comments.map((c) => (
                    <p key={c.id} className="py-0.5 text-sm text-zinc-300"><b>{c.author}</b> · {c.text}</p>
                  ))}
                  <div className="mt-2 flex gap-2">
                    <input value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="댓글을 입력하세요" className="flex-1 rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1.5 text-sm" />
                    <button onClick={() => addComment(it.id)} className="rounded-md bg-[var(--color-accent)] px-3 py-1.5 text-xs font-bold text-zinc-950">등록</button>
                  </div>
                </div>
              )}
""" if "comments" in feats else "")
    # textual placeholders
    p = p.replace("'{resource}'", f"'{c['resource']}'").replace("'{label}'", f"'{c['label']}'")
    p = p.replace("{cat_name}</p>", f"{t['cat_name']}</p>")
    p = p.replace("{title}</h1>", f"{t['title']}</h1>")
    p = p.replace("{desc}</p>", f"{t['desc']}</p>")
    p = p.replace("{label}", c["label"])
    return p

FEATURE_LINES = {
    "auth": "- 회원가입/로그인 — bcrypt 비밀번호 해시 + JWT(jose) 토큰 인증",
    "comments": "- 댓글 작성/조회 (항목별 댓글 목록)",
    "likes": "- 좋아요 (낙관적 업데이트로 즉시 반영)",
    "search": "- 키워드 검색 — 제목/내용 서버 사이드 필터링",
    "upload": "- 파일 업로드 — 서버 저장 후 URL 반환",
    "admin": "- 관리자 통계 — 전체 항목 수/총 조회수/총 좋아요 대시보드",
}
API_EXTRA = {
    "search": "| GET | `/api/{resource}?q=키워드` | 키워드 검색 |\n",
    "auth": "| POST | `/api/auth/register`, `/api/auth/login` | 회원가입 / 로그인 (JWT 발급) |\n",
    "comments": "| GET·POST | `/api/{resource}/[id]/comments` | 댓글 목록 / 작성 |\n",
    "likes": "| POST | `/api/{resource}/[id]/like` | 좋아요 +1 |\n",
    "upload": "| POST | `/api/upload` | 파일 업로드 (multipart) |\n",
    "admin": "| GET | `/api/admin/stats` | 관리자 통계 |\n",
}

def main():
    topics = parse_topics()
    assert len(topics) == 200, f"expected 200 topics, got {len(topics)}"
    catalog = []
    _cat_path = ROOT / "catalog.json"
    if _cat_path.exists():
        catalog = json.loads(_cat_path.read_text(encoding="utf-8"))
        for _e in catalog:
            _e.setdefault("day", 1)
            _e.setdefault("date", "2026-11-22")
    for t in topics:
        c = CATEGORIES[t["cat"]]
        idx = t["num"] - (t["cat"] - 1) * 20
        folder = f"{t['num']:03d}-{c['slug']}-{idx:02d}"
        feats = features(t["desc"])
        lower = c["model"][0].lower() + c["model"][1:]
        d = OUT / folder
        (d / "prisma").mkdir(parents=True, exist_ok=True)
        (d / "src/app/api" / c["resource"] / "[id]").mkdir(parents=True, exist_ok=True)
        (d / "src/lib").mkdir(parents=True, exist_ok=True)

        def w(rel, content):
            p = d / rel
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text(content, encoding="utf-8")

        auth_deps = ',\n    "bcryptjs": "^2.4.3",\n    "jose": "^5.9.6"' if "auth" in feats else ""
        auth_devdeps = ',\n    "@types/bcryptjs": "^2.4.6"' if "auth" in feats else ""
        unbrace = lambda s: s.replace("{{", "{").replace("}}", "}")
        w("package.json", unbrace(PACKAGE_JSON.replace("{pkg}", folder).replace("{auth_deps}", auth_deps).replace("{auth_devdeps}", auth_devdeps)))
        w("tsconfig.json", TSCONFIG)
        w("next.config.ts", NEXT_CONFIG)
        w("postcss.config.mjs", POSTCSS)
        w(".env.example", ENV_EXAMPLE)
        w(".gitignore", GITIGNORE)
        w("src/lib/db.ts", DB_TS)
        if "auth" in feats: w("src/lib/auth.ts", AUTH_TS)

        relations = "  comments  Comment[]\n" if "comments" in feats else ""
        extra = ""
        if "comments" in feats:
            extra += COMMENT_MODEL.replace("{lower}", lower).replace("{model}", c["model"])
        if "auth" in feats:
            extra += USER_MODEL
        w("prisma/schema.prisma", unbrace(SCHEMA.replace("{model}", c["model"]).replace("{relations}", relations).replace("{extra_models}", extra)))

        seed_rows = ",\n".join(
            "      { title: '%s', content: '%s', author: '%s' }" % (a, b, au)
            for a, b, au in [
                (f"첫 번째 {c['label']} 예시", t["desc"].split(".")[0][:80], "관리자"),
                (f"두 번째 {c['label']} 예시", "prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.", "데모 사용자"),
                (f"세 번째 {c['label']} 예시", "목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.", "테스터"),
            ])
        auth_import = "import bcrypt from 'bcryptjs';" if "auth" in feats else ""
        auth_seed = ("  await prisma.user.upsert({ where: { email: 'demo@example.com' }, update: {}, "
                     "create: { email: 'demo@example.com', password: await bcrypt.hash('demo1234', 10), name: '데모 사용자' } });\n") if "auth" in feats else ""
        w("prisma/seed.ts", SEED_TS.replace("{auth_import}", auth_import).replace("{auth_seed}", auth_seed)
          .replace("{lower}", lower).replace("{seed_rows}", seed_rows))

        w("src/app/layout.tsx", LAYOUT.replace("{title_js}", json.dumps(t["title"], ensure_ascii=False))
          .replace("{desc_js}", json.dumps(t["desc"][:100], ensure_ascii=False)))
        w("src/app/globals.css", GLOBALS_CSS.replace("{accent}", c["accent"]))
        w("src/app/page.tsx", build_page(t, c, feats))

        w(f"src/app/api/{c['resource']}/route.ts", API_LIST.replace("{lower}", lower))
        w(f"src/app/api/{c['resource']}/[id]/route.ts", API_ITEM.replace("{lower}", lower))
        if "likes" in feats:
            w(f"src/app/api/{c['resource']}/[id]/like/route.ts", API_LIKE.replace("{lower}", lower))
        if "comments" in feats:
            w(f"src/app/api/{c['resource']}/[id]/comments/route.ts", API_COMMENTS.replace("{lower}", lower))
        if "auth" in feats:
            w("src/app/api/auth/[...action]/route.ts", API_AUTH)
        if "admin" in feats:
            w("src/app/api/admin/stats/route.ts", API_ADMIN.replace("{lower}", lower))
        if "upload" in feats:
            w("src/app/api/upload/route.ts", API_UPLOAD)

        feature_lines = "\n".join(FEATURE_LINES[f] for f in feats) or "- 기본 CRUD 중심 구성"
        api_extra = "".join(API_EXTRA[f] for f in feats).replace("{resource}", c["resource"])
        readme = (README_TMPL.replace("{title}", t["title"]).replace("{cat_name}", t["cat_name"])
                  .replace("{difficulty}", difficulty(idx)).replace("{num}", str(t["num"]))
                  .replace("{desc}", t["desc"])
                  .replace("{auth_line}", "- **Auth**: JWT(jose) + bcryptjs 비밀번호 해시" if "auth" in feats else "")
                  .replace("{feature_lines}", feature_lines)
                  .replace("{label}", c["label"]).replace("{resource}", c["resource"])
                  .replace("{auth_demo}", "데모 계정: `demo@example.com` / `demo1234` (seed로 자동 생성)\n" if "auth" in feats else "")
                  .replace("{api_extra}", api_extra)
                  .replace("{auth_lib}", ", auth.ts (JWT/비밀번호 해시)" if "auth" in feats else ""))
        w("README.md", readme)

        catalog.append(dict(num=600 + t["num"], title=t["title"], desc=t["desc"], category=t["cat_name"],
                            difficulty=difficulty(idx), features=feats, folder=f"day-2026-11-25/{folder}",
                            resource=c["resource"], label=c["label"], day=4, date="2026-11-25"))
    (ROOT / "catalog.json").write_text(json.dumps(catalog, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"generated {len(catalog)} projects")

if __name__ == "__main__":
    main()
