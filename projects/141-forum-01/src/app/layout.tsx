import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기본 게시판 포럼",
  description: "글을 쓰고 읽고 수정·삭제하는 전형적인 게시판입니다. 글은 DB에 저장되고 페이지 나누기(페이지네이션)를 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
