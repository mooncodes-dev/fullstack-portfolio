import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "토론 주제 게시판 포럼",
  description: "찬반 토론 주제를 올리고 의견을 나누는 게시판 포럼이다. 토론 글에 댓글을 달고 좋아요를 눌러 설득력 있는 의견을 가려낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
