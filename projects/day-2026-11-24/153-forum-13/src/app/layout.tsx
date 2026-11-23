import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "부동산 정보 게시판 포럼",
  description: "회원가입과 로그인을 하면 동네 부동산 정보를 나누는 게시판 포럼이다. 매물 글을 검색해 원하는 집을 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
