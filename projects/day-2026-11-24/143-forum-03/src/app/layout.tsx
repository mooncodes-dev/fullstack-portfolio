import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "취미 추천 게시판 포럼",
  description: "회원가입과 로그인을 하면 취미를 추천하고 후기를 남기는 게시판 포럼이다. 취미 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
