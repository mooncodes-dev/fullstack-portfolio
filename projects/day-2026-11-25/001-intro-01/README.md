# 나의 아침 루틴 소개 페이지

> 나만의 소개 웹페이지 · 난이도 입문 · 풀스택 프로젝트 #1

매일 아침 루틴을 시간대별로 소개하고, 루틴 이름으로 검색할 수 있다. 루틴 항목은 추가·수정·삭제가 가능하다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)


## 핵심 기능

- 키워드 검색 — 제목/내용 서버 사이드 필터링
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


## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/entries` | 항목 목록 (최신순) |
| POST | `/api/entries` | 항목 등록 |
| GET | `/api/entries/[id]` | 항목 상세 (조회수 +1) |
| PUT | `/api/entries/[id]` | 항목 수정 |
| DELETE | `/api/entries/[id]` | 항목 삭제 |
| GET | `/api/entries?q=키워드` | 키워드 검색 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
