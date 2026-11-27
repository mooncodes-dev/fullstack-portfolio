import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 재택근무 일상 블로그",
  description: "재택근무 환경과 루틴을 기록하고, 회원가입과 로그인으로 나만의 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
