import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.project.createMany({
    data: [
      { title: '첫 번째 프로젝트 예시', content: '프로젝트마다 상세 페이지에서 만든 과정과 배운 점을 길게 보여주세요', author: '관리자' },
      { title: '두 번째 프로젝트 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 프로젝트 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
