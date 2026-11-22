import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "익명 게시판 포럼",
  description: "닉네임 없이 글을 쓰는 익명 게시판입니다. 글은 DB에 저장되지만 작성자 정보는 표시하지 않고, 비밀번호로 본인 글을 삭제할 수 있게 합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
