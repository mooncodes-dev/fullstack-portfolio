import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.entry.createMany({
    data: [
      { title: '첫 번째 항목 예시', content: '연습하는 악기와 연습 곡을 소개하고, 연습 기록을 추가·수정·삭제할 수 있다', author: '관리자' },
      { title: '두 번째 항목 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 항목 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
