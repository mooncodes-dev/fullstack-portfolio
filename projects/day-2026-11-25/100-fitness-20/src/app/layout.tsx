import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스포츠 센터 통합 기록 플랫폼",
  description: "여러 종목의 운동 기록을 한곳에 모으고, 관리자가 기록을 검수하고 종목을 관리할 수 있다. 회원가입과 로그인으로 회원을 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
