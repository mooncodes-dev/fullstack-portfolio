import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "유머 게시판 포럼",
  description: "웃긴 글이나 짤을 공유하는 게시판 포럼이다. 마음에 드는 글에 좋아요를 눌러 오늘의 유머를 골라낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
