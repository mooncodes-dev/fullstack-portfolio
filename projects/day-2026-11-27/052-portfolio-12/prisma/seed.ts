import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.project.createMany({
    data: [
      { title: '첫 번째 프로젝트 예시', content: '번역한 영상 자막과 작품을 언어별로 보여주고, 방문자가 번역 사례에 댓글을 남길 수 있다', author: '관리자' },
      { title: '두 번째 프로젝트 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 프로젝트 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
