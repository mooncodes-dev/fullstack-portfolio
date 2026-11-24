import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "피아노 연주곡 기록",
  description: "연습 중인 피아노 연주곡을 기록하고, 회원가입과 로그인으로 나만의 연주 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
