import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주제별 게시판 포럼",
  description: "자유, 질문, 정보처럼 게시판을 나눈 포럼입니다. 게시판 정보는 DB에 저장하고 게시판마다 글 목록을 따로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
