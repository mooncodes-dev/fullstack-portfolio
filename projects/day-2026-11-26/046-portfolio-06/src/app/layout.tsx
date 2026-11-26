import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "데이터 과학자 포트폴리오",
  description: "분석한 데이터 프로젝트를 소개하고, 회원가입과 로그인으로 나만의 분석 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
