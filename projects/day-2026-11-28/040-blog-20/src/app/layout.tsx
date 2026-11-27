import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여러 취미인의 일상 블로그 플랫폼",
  description: "여러 사람이 취미 일상을 함께 기록하고, 관리자가 글을 승인하고 회원을 관리할 수 있다. 회원가입과 로그인으로 회원을 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
