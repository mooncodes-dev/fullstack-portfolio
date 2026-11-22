import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      { title: '첫 번째 상품 예시', content: '전자책 파일 같은 디지털 상품을 팔고, 주문 완료 후 다운로드 링크를 제공하는 상점입니다', author: '관리자' },
      { title: '두 번째 상품 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 상품 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
