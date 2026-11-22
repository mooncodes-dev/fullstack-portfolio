# 풀스택 포트폴리오 프로젝트 200선

초보자가 끝까지 만들어보는 풀스택 프로젝트 200개. 전부 **실제로 동작하는 완성 코드**입니다.
주제마다 회원가입·로그인, DB CRUD, 댓글, 좋아요, 검색, 파일 업로드, 관리자 통계 중 필요한 기능을 골라 구현했습니다.

**[카탈로그 페이지에서 200개 한눈에 보기](https://mooncodes-dev.github.io/fullstack-portfolio/)** · 주제 원본 목록은 [TOPICS.md](TOPICS.md)

## 기술 스택

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — 반응형(모바일/태블릿/데스크톱) UI
- **Prisma ORM + SQLite** (스키마만 바꾸면 PostgreSQL/MySQL 전환 가능)
- **Zod** 입력 검증 · **JWT(jose) + bcrypt** 인증

## 아무거나 골라서 실행해보기

```bash
cd projects/001-intro-01
npm install
cp .env.example .env
npm run db:push    # DB 테이블 생성
npm run db:seed    # 샘플 데이터 + 데모 계정
npm run dev        # http://localhost:3000
```

각 프로젝트 폴더의 README에 기능 설명과 API 문서가 들어 있습니다.

## 구성

```
projects/   # 프로젝트 200개 (001~200, 카테고리 10종 x 20개)
index.html  # 카탈로그 웹페이지 (검색/카테고리 필터)
catalog.json# 카탈로그 데이터
TOPICS.md   # 주제 200개 원본 목록
tools/      # 프로젝트 생성/카탈로그 빌드 스크립트
```

## 카테고리

자기소개 페이지 · 블로그 · 포트폴리오 · 레시피 · 헬스/운동 · 여행 일지 · 음악 · 포럼 · 온라인 상점 · 날씨

---
Moon Codes — 매일 새 프로젝트 200개가 추가됩니다.
