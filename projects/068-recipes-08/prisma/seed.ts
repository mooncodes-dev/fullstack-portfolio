import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.recipe.createMany({
    data: [
      { title: '첫 번째 레시피 예시', content: '레시피 재료 양을 DB에 숫자로 저장해두고, 인분을 바꾸면 재료 양이 자동으로 계산되어 표시되는 기능을 만드세요', author: '관리자' },
      { title: '두 번째 레시피 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 레시피 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
