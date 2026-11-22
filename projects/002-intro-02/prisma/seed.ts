import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.entry.createMany({
    data: [
      { title: '첫 번째 항목 예시', content: '프로필 페이지에 하트 버튼을 만들고, 누른 횟수를 DB에 저장해 새로고침해도 숫자가 유지되게 하세요', author: '관리자' },
      { title: '두 번째 항목 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 항목 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
