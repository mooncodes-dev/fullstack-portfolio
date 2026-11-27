import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여러 작가의 일상 블로그 플랫폼",
  description: "여러 작가가 일상을 함께 기록하고, 관리자가 글을 승인하고 작가를 관리할 수 있다. 회원가입과 로그인으로 작가를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
