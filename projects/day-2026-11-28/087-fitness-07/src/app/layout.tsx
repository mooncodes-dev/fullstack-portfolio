import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "배드민턴 동호회 페이지",
  description: "동호회 경기 일정과 결과를 기록하고, 회원가입과 로그인으로 회원을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
