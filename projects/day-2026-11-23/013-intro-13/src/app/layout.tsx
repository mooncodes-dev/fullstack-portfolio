import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "한 달 챌린지 기록 소개 페이지",
  description: "매달 정한 챌린지의 진행 상황을 달력으로 보여주고, 달성 여부를 기록할 수 있다. 로그인한 사용자만 자신의 챌린지를 만들고 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
