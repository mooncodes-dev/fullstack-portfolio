import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "글 좋아요 랭킹 포럼",
  description: "좋아요를 많이 받은 글을 순위별로 보여주는 게시판 포럼이다. 키워드로 글을 검색해 지난 인기 글을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
