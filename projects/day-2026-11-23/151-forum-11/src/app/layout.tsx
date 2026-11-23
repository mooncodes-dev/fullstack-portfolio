import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스터디 모집 게시판 포럼",
  description: "함께 공부할 스터디원을 모집하는 게시판 포럼이다. 모집 글에 댓글을 달아 참여 의사를 밝힐 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
