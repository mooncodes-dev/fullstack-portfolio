import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 카테고리 관리 포럼",
  description: "관리자가 게시판 카테고리를 만들고 정리하는 포럼이다. 카테고리를 검색해 원하는 게시판을 찾고 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
