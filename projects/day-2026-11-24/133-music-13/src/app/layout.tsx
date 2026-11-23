import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "게임 음악 모음 플랫폼",
  description: "게임의 배경 음악과 주제곡을 모아 소개하는 플랫폼이다. 회원가입과 로그인을 하면 나만의 게임 음악 목록을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
