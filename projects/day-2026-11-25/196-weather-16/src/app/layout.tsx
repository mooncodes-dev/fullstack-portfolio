import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장마철 습도 기록",
  description: "장마철 습도와 대비법을 기록하고, 회원가입과 로그인으로 나만의 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
