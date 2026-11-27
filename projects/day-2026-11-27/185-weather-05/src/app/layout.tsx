import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등산 날씨 정보 페이지",
  description: "산별 날씨 정보를 제공하고, 회원가입과 로그인으로 나만의 관심 산을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
