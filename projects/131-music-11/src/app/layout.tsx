import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 퀴즈 플랫폼",
  description: "곡 제목 맞히기 퀴즈를 내고 점수를 기록하는 플랫폼입니다. 문제와 정답은 DB에 저장하고 사용자별 최고 점수 랭킹을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
