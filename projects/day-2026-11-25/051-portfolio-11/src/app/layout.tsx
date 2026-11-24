import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "마케터 캠페인 포트폴리오",
  description: "진행한 마케팅 캠페인을 소개하고, 회원가입과 로그인으로 나만의 캠페인 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
