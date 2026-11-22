import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "방문자 통계가 보이는 소개 페이지",
  description: "페이지 방문 기록(IP가 아닌 날짜와 시간 기준)을 DB에 쌓고, 오늘 방문자 수와 누적 방문자 수를 본인만 볼 수 있는 통계 화면으로 보여주는 기능을 추가하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
