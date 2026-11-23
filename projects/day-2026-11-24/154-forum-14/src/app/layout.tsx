import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주식 토론 게시판 포럼",
  description: "주식 종목에 대해 토론하는 게시판 포럼이다. 토론 글에 좋아요를 눌러 설득력 있는 의견을 가려낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
