import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아침 조깅 기록",
  description: "아침에 뛴 조깅 거리와 페이스를 기록하고, 회원가입과 로그인으로 조깅 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
