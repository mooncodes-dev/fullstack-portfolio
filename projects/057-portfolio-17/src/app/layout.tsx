import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포트폴리오 방문 통계",
  description: "어떤 프로젝트가 가장 많이 조회됐는지 통계를 내는 관리자 대시보드를 만드세요. 조회 기록을 DB에 쌓아 날짜별·프로젝트별 그래프로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
