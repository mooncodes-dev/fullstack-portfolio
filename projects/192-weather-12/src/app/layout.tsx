import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 통계 사이트",
  description: "매일 특정 도시의 날씨를 API로 수집해 DB에 쌓고, 월별 평균 기온 같은 통계를 보여주는 사이트입니다. 수집 기록이 쌓일수록 그래프가 풍성해집니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
