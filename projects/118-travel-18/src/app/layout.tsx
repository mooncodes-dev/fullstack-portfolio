import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "연도별 여행 통계 사이트",
  description: "내가 다녀온 여행 횟수, 방문 도시 수, 총 지출을 연도별로 집계해 보여주는 대시보드입니다. 집계는 DB 데이터로 계산합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
