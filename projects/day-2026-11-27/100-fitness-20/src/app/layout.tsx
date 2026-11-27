import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 정보 종합 플랫폼",
  description: "여러 트레이너의 운동 정보를 함께 제공하고, 관리자가 정보를 검수하고 트레이너를 관리할 수 있다. 회원가입과 로그인으로 트레이너를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
