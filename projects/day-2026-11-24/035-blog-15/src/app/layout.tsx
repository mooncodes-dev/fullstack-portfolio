import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다이어트 식단 일기 블로그",
  description: "매일 먹은 식단과 체중 변화를 기록하고, 방문자가 식단 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
