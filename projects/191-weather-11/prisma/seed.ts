import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.report.createMany({
    data: [
      { title: '첫 번째 날씨 기록 예시', content: '동네별로 게시판을 만들어 주민들이 체감 날씨를 글로 남기는 사이트입니다', author: '관리자' },
      { title: '두 번째 날씨 기록 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 날씨 기록 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
