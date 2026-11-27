import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({ where: { email: 'demo@example.com' }, update: {}, create: { email: 'demo@example.com', password: await bcrypt.hash('demo1234', 10), name: '데모 사용자' } });

  await prisma.track.createMany({
    data: [
      { title: '첫 번째 곡 예시', content: '집중할 때 듣는 음악을 공유하고, 회원가입과 로그인으로 나만의 플레이리스트를 관리할 수 있다', author: '관리자' },
      { title: '두 번째 곡 예시', content: 'prisma/seed.ts에서 넣은 샘플 데이터입니다. 실제 내용으로 바꿔보세요.', author: '데모 사용자' },
      { title: '세 번째 곡 예시', content: '목록/검색/상세 흐름을 확인하기 위한 테스트 데이터입니다.', author: '테스터' }
    ],
  });
  console.log('seed complete');
}

main().finally(() => prisma.$disconnect());
