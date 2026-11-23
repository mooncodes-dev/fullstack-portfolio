import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기분별 노래 추천 플랫폼",
  description: "기분을 고르면 어울리는 노래를 추천해 주는 플랫폼이다. 노래 제목이나 가수를 검색해 기분별 추천 목록을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
