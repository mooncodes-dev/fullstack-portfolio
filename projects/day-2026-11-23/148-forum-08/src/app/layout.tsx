import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사진 자랑 게시판 포럼",
  description: "회원가입과 로그인을 하면 자랑하고 싶은 사진을 올리는 게시판 포럼이다. 사진 글에 댓글을 달아 감상을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
