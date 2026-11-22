import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.thread.createMany({
    data: [
      { title: '첫 번째 게시글 예시', content: '제목, 작성자, 내용으로 검색하고 최신순·조회순·추천순으로 정렬하는 포럼입니다', author: '관리자' },
      { title: '두 번째 게시글 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 게시글 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
