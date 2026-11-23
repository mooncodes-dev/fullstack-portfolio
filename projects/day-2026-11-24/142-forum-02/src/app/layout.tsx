import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘의 운세 게시판 포럼",
  description: "오늘의 운세와 별자리 이야기를 나누는 게시판 포럼이다. 운세 글에 댓글을 달아 하루의 기대를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
