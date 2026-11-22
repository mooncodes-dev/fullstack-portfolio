import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "실시간 인기 검색 곡 플랫폼",
  description: "사용자들이 검색한 곡을 집계해 오늘 많이 찾는 곡 순위를 보여주는 플랫폼입니다. 검색 기록을 DB에 쌓고 시간대별 집계를 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
