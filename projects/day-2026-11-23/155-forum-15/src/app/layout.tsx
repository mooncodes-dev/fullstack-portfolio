import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 글 임시저장 포럼",
  description: "회원가입과 로그인을 하면 쓰던 글을 임시저장하는 게시판 포럼이다. 임시저장한 글을 검색해 이어서 작성할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
