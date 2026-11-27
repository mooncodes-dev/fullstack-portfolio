import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 공부법 소개 페이지",
  description: "나만의 공부법과 시간 관리법을 소개하고, 회원가입과 로그인으로 나만의 공부 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
