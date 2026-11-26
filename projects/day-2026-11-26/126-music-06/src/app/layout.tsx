import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "독서 배경 음악 모음",
  description: "책을 읽을 때 듣는 음악을 소개하고, 회원가입과 로그인으로 나만의 음악 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
