import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.recipe.createMany({
    data: [
      { title: '첫 번째 레시피 예시', content: '내 냉장고 재료와 유통기한을 등록하면, 유통기한 임박 재료를 알려주고 그 재료로 만들 수 있는 레시피를 추천하는 사이트를 만드세요', author: '관리자' },
      { title: '두 번째 레시피 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 레시피 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
