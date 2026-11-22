import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.track.createMany({
    data: [
      { title: '첫 번째 곡 예시', content: '매주 새 앨범 소식을 전하는 뉴스레터 구독 폼과 발송 목록 관리 페이지를 만드세요', author: '관리자' },
      { title: '두 번째 곡 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 곡 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
