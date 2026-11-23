import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "책 추천 게시판 포럼",
  description: "읽어본 책을 추천하는 게시판 포럼이다. 책 이름을 검색해 추천 글을 빠르게 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
