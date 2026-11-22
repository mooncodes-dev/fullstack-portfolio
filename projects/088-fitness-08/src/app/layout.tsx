import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 챌린지 페이지",
  description: "\"30일 스쿼트 챌린지\"처럼 매일 인증 체크를 하는 챌린지를 만드세요. 참여 신청과 날짜별 완료 체크를 DB에 저장하고 진행률을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
