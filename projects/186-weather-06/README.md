# 옷차림 추천 사이트

> 날씨 정보 제공 사이트 · 난이도 입문 · 풀스택 프로젝트 #186

API로 받은 기온에 따라 어울리는 옷차림을 추천하는 사이트입니다. 기온 구간별 추천 문구는 DB에 저장하고 관리자가 수정할 수 있습니다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)


## 핵심 기능

- 관리자 통계 — 전체 항목 수/총 조회수/총 좋아요 대시보드
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


## API

| 메서드 | 경로 | 설명 |
|---|---|---|
| GET | `/api/reports` | 날씨 기록 목록 (최신순) |
| POST | `/api/reports` | 날씨 기록 등록 |
| GET | `/api/reports/[id]` | 날씨 기록 상세 (조회수 +1) |
| PUT | `/api/reports/[id]` | 날씨 기록 수정 |
| DELETE | `/api/reports/[id]` | 날씨 기록 삭제 |
| GET | `/api/admin/stats` | 관리자 통계 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
