# 나의 취미와 일상 종합 소개 페이지

> 나만의 소개 웹페이지 · 난이도 심화 · 풀스택 프로젝트 #20

소개, 취미, 활동을 한 화면에 모으고, 관리자가 소개 글과 댓글을 한곳에서 관리할 수 있다. 회원가입과 로그인으로 프로필을 관리한다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)
- **Auth**: JWT(jose) + bcryptjs 비밀번호 해시

## 핵심 기능

- 회원가입/로그인 — bcrypt 비밀번호 해시 + JWT(jose) 토큰 인증
- 댓글 작성/조회 (항목별 댓글 목록)
- 관리자 통계 — 전체 항목 수/총 조회수/총 좋아요 대시보드
- 항목 CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
- 시드 데이터 포함 — 설치 후 바로 화면에서 확인 가능

## 실행 방법

```bash
npm install
cp .env.example .env
npm run db:push     # DB 테이블 생성
npm run db:seed     # 샘플 데이터 입력
npm run dev         # http://localhost:3000
```

데모 계정: `demo@example.com` / `demo1234` (seed로 자동 생성)

## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/entries` | 항목 목록 (최신순) |
| POST | `/api/entries` | 항목 등록 |
| GET | `/api/entries/[id]` | 항목 상세 (조회수 +1) |
| PUT | `/api/entries/[id]` | 항목 수정 |
| DELETE | `/api/entries/[id]` | 항목 삭제 |
| POST | `/api/auth/register`, `/api/auth/login` | 회원가입 / 로그인 (JWT 발급) |
| GET·POST | `/api/entries/[id]/comments` | 댓글 목록 / 작성 |
| GET | `/api/admin/stats` | 관리자 통계 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트), auth.ts (JWT/비밀번호 해시)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
