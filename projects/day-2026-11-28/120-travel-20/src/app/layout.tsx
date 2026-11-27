import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 기록 종합 공유 플랫폼",
  description: "여러 여행자의 기록을 함께 모으고, 관리자가 기록을 검수하고 여행자를 관리할 수 있다. 회원가입과 로그인으로 여행자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
