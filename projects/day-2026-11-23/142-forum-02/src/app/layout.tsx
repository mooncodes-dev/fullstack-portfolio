import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "관심사별 동호회 포럼",
  description: "회원가입과 로그인을 하면 관심사별 동호회 게시판을 만들고 글을 쓸 수 있는 포럼이다. 동호회 게시판과 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
