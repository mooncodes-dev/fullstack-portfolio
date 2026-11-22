import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.post.createMany({
    data: [
      { title: '첫 번째 글 예시', content: '부적절한 글·댓글을 신고할 수 있게 하고, 관리자 계정은 신고 목록을 보고 글을 숨기거나 삭제할 수 있는 블로그를 만드세요', author: '관리자' },
      { title: '두 번째 글 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 글 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
