import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "게임 공략 게시판 포럼",
  description: "게임 공략과 팁을 나누는 게시판 포럼이다. 공략 글에 댓글을 달아 추가 팁을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
