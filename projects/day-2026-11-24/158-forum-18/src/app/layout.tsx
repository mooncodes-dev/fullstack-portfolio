import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "맛집 추천 게시판 포럼",
  description: "다녀온 맛집을 추천하는 게시판 포럼이다. 맛집 이름을 검색해 추천 글을 찾고, 추천 글에 댓글을 달아 다녀온 후기를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
