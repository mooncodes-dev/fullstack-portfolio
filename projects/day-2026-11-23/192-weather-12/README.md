# 스키장 날씨 안내 사이트

> 날씨 정보 제공 사이트 · 난이도 기본 · 풀스택 프로젝트 #192

회원가입과 로그인을 하면 자주 가는 스키장의 날씨를 저장하는 사이트이다. 스키장별 날씨를 등록하고 조회하고 수정하고 삭제할 수 있다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)
- **Auth**: JWT(jose) + bcryptjs 비밀번호 해시

## 핵심 기능

- 회원가입/로그인 — bcrypt 비밀번호 해시 + JWT(jose) 토큰 인증
- 날씨 기록 CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
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
| GET | `/api/reports` | 날씨 기록 목록 (최신순) |
| POST | `/api/reports` | 날씨 기록 등록 |
| GET | `/api/reports/[id]` | 날씨 기록 상세 (조회수 +1) |
| PUT | `/api/reports/[id]` | 날씨 기록 수정 |
| DELETE | `/api/reports/[id]` | 날씨 기록 삭제 |
| POST | `/api/auth/register`, `/api/auth/login` | 회원가입 / 로그인 (JWT 발급) |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트), auth.ts (JWT/비밀번호 해시)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
