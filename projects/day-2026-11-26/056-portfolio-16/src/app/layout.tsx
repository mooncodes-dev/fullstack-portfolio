import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "웹툰 작가 작품 포트폴리오",
  description: "연재한 웹툰의 회차와 장면을 소개하고, 회원가입과 로그인으로 나만의 연재 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
