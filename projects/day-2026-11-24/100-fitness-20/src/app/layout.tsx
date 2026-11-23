import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전 종목 운동 기록 통합 플랫폼",
  description: "여러 종목의 운동 기록을 한곳에 모으고, 관리자가 종목별 기록과 챌린지를 관리할 수 있다. 회원가입과 로그인으로 선수를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
