import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이직 준비 일기 블로그",
  description: "이직을 준비하며 공부한 내용과 면접 후기를 기록하고, 회원가입과 로그인으로 나만의 준비 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
