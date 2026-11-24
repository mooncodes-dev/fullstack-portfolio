import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "농구 동호회 기록",
  description: "동호회 경기 결과와 일정을 기록하고, 회원가입과 로그인으로 동호회 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
