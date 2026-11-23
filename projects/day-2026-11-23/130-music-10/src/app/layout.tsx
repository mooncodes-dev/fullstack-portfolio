import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장르별 명곡 아카이브 플랫폼",
  description: "장르별로 명곡을 모아 보관하는 플랫폼이다. 곡을 검색하고 마음에 드는 명곡에 좋아요를 눌러 나만의 명곡 목록을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
