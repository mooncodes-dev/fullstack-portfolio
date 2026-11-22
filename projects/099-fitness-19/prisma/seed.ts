import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.workout.createMany({
    data: [
      { title: '첫 번째 운동 기록 예시', content: '상담 신청 폼에 이름, 연락처, 고민을 적어 보내면 DB에 저장되고, 트레이너 계정만 신청 목록을 보고 답변 상태를 바꿀 수 있는 페이지를 만드', author: '관리자' },
      { title: '두 번째 운동 기록 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 운동 기록 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
