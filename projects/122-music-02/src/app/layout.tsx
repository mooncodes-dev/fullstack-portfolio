import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘의 노래 플랫폼",
  description: "매일 한 곡씩 추천 곡을 소개하고 방문자가 별점을 매기는 플랫폼입니다. 곡 정보는 DB에 저장하고 날짜별로 골라 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
