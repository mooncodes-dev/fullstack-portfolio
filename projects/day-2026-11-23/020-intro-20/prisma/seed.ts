import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({ where: { email: 'demo@example.com' }, update: {}, create: { email: 'demo@example.com', password: await bcrypt.hash('demo1234', 10), name: '데모 사용자' } });

  await prisma.entry.createMany({
    data: [
      { title: '첫 번째 항목 예시', content: '소개, 이력, 취미, 연락처를 한 화면에 모으고, 관리자가 방문자 문의와 댓글을 한곳에서 관리할 수 있다', author: '관리자' },
      { title: '두 번째 항목 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 항목 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
