import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "힙합 가사 분석 페이지",
  description: "힙합 곡의 가사와 의미를 분석하고, 회원가입과 로그인으로 나만의 분석을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
