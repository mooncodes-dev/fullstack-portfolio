import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계단 오르기 챌린지 페이지",
  description: "계단 오르기 기록과 랭킹을 정리하고, 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
