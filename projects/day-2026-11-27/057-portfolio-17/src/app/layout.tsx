import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "과학 연구자 포트폴리오",
  description: "발표한 연구와 논문을 소개하고, 회원가입과 로그인으로 나만의 연구 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
