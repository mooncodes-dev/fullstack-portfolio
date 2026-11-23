import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자기소개 게시판 포럼",
  description: "새로 가입한 회원이 자신을 소개하는 글을 남기는 게시판 포럼이다. 자기소개 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
