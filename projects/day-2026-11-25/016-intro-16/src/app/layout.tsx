import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 좋아하는 보드게임 소개 페이지",
  description: "즐겨 하는 보드게임을 소개하고, 게임 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
