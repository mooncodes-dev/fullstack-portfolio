import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "멀티 크리에이터 포트폴리오 플랫폼",
  description: "여러 분야의 크리에이터 작품을 함께 보여주고, 관리자가 작품을 검수하고 크리에이터를 관리할 수 있다. 회원가입과 로그인으로 크리에이터를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
