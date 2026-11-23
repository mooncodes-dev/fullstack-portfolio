import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 회원 프로필 포럼",
  description: "회원의 프로필과 활동 내역을 모아 보여주는 게시판 포럼이다. 마음에 드는 회원의 글에 좋아요를 눌러 응원할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
