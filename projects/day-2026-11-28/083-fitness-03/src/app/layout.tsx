import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈트레이닝 챌린지 페이지",
  description: "집에서 하는 운동 챌린지와 달성 현황을 기록하고, 회원가입과 로그인으로 나만의 챌린지를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
