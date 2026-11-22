# 주제별 게시판 포럼

> 온라인 포럼 사이트 · 난이도 입문 · 풀스택 프로젝트 #143

자유, 질문, 정보처럼 게시판을 나눈 포럼입니다. 게시판 정보는 DB에 저장하고 게시판마다 글 목록을 따로 보여줍니다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)


## 핵심 기능

- 기본 CRUD 중심 구성
- 게시글 CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
- 시드 데이터 포함 — 설치 후 바로 화면에서 확인 가능

## 실행 방법

```bash
npm install
cp .env.example .env
npm run db:push     # DB 테이블 생성
npm run db:seed     # 샘플 데이터 입력
npm run dev         # http://localhost:3000
```


## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/threads` | 게시글 목록 (최신순) |
| POST | `/api/threads` | 게시글 등록 |
| GET | `/api/threads/[id]` | 게시글 상세 (조회수 +1) |
| PUT | `/api/threads/[id]` | 게시글 수정 |
| DELETE | `/api/threads/[id]` | 게시글 삭제 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
