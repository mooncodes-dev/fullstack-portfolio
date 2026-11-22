# 레시피 구독 박스 흉내 사이트

> 레시피 공유 웹사이트 · 난이도 심화 · 풀스택 프로젝트 #80

좋아하는 스타일을 고르면 매주 레시피 세트를 추천해주는 구독 서비스를 흉내 내보세요. 구독 신청과 해지는 DB에 저장하고, 관리자 페이지에서 구독자 목록을 관리합니다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)


## 핵심 기능

- 관리자 통계 — 전체 항목 수/총 조회수/총 좋아요 대시보드
- 레시피 CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
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
| GET | `/api/recipes` | 레시피 목록 (최신순) |
| POST | `/api/recipes` | 레시피 등록 |
| GET | `/api/recipes/[id]` | 레시피 상세 (조회수 +1) |
| PUT | `/api/recipes/[id]` | 레시피 수정 |
| DELETE | `/api/recipes/[id]` | 레시피 삭제 |
| GET | `/api/admin/stats` | 관리자 통계 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
