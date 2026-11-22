# 신청곡 플랫폼

> 음악 추천 및 공유 플랫폼 · 난이도 입문 · 풀스택 프로젝트 #127

방문자가 듣고 싶은 곡을 신청하면 목록에 쌓이고, 관리자가 재생 완료로 표시하는 플랫폼입니다. 신청 곡은 DB에 저장되고 대기 순서를 보여줍니다.

## 기술 스택

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 — 반응형(모바일/태블릿/데스크톱) UI
- **Backend**: Next.js Route Handlers (REST API), Zod 입력 검증
- **Database**: Prisma ORM + SQLite (스키마만 바꾸면 PostgreSQL/MySQL로 전환 가능)


## 핵심 기능

- 관리자 통계 — 전체 항목 수/총 조회수/총 좋아요 대시보드
- 곡 CRUD (등록/목록/상세/수정/삭제) + 조회수 자동 증가
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
| GET | `/api/tracks` | 곡 목록 (최신순) |
| POST | `/api/tracks` | 곡 등록 |
| GET | `/api/tracks/[id]` | 곡 상세 (조회수 +1) |
| PUT | `/api/tracks/[id]` | 곡 수정 |
| DELETE | `/api/tracks/[id]` | 곡 삭제 |
| GET | `/api/admin/stats` | 관리자 통계 |

## 폴더 구조

```
prisma/           # schema.prisma (DB 모델), seed.ts (샘플 데이터)
src/app/          # 페이지(UI)와 api/ 라우트 핸들러
src/lib/          # db.ts (Prisma 클라이언트)
```

## 확장 아이디어

- 실제 서비스로 키우려면: 이미지 스토리지(S3), 소셜 로그인, 배포(Vercel + PlanetScale/Neon)부터 붙여보세요.
