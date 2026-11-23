import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "힙합 신곡 소개 플랫폼",
  description: "새로 나온 힙합 곡을 소개하고 평가하는 플랫폼이다. 회원가입과 로그인을 하면 신곡 평가를 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
