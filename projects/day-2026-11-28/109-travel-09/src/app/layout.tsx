import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "제주 오름 트레킹 페이지",
  description: "제주 오름의 트레킹 코스와 난이도를 기록하고, 회원가입과 로그인으로 나만의 트레킹 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
