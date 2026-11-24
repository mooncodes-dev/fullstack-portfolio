import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "온라인 강의 복습 블로그",
  description: "들은 온라인 강의 내용을 복습하며 정리하고, 회원가입과 로그인으로 나만의 복습 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
