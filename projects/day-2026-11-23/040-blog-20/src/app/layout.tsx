import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다작가 공동 블로그 플랫폼",
  description: "여러 작성자가 함께 글을 쓰고, 관리자가 글을 승인하고 카테고리를 관리할 수 있다. 회원가입과 로그인으로 작성자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
