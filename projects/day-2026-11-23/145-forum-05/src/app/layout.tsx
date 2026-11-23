import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "정보 공유 게시판 포럼",
  description: "유용한 정보를 모아 공유하는 게시판 포럼이다. 키워드로 글을 검색해 원하는 정보를 빠르게 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
