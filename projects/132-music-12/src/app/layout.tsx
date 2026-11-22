import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "악기 연습 기록 플랫폼",
  description: "어떤 악기를 몇 분 연습했는지 기록하고 주간 통계를 내는 플랫폼입니다. 기록은 로그인 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
