import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.thread.createMany({
    data: [
      { title: '첫 번째 게시글 예시', content: '새벽 공부 모임의 인증과 후기를 나누고, 방문자가 글에 좋아요를 누를 수 있다', author: '관리자' },
      { title: '두 번째 게시글 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 게시글 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
