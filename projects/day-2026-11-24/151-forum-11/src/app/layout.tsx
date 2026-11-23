import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이사 정보 게시판 포럼",
  description: "이사 업체와 동네 정보를 나누는 게시판 포럼이다. 이사 글을 검색해 원하는 정보를 빠르게 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
