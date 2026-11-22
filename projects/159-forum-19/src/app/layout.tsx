import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "모임 소게시판 포럼",
  description: "회원이 직접 작은 주제 게시판을 만들고 다른 회원이 가입해서 글을 쓰는 포럼입니다. 게시판 개설과 가입 관계를 DB에 저장하고 게시판장 권한을 둡니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
