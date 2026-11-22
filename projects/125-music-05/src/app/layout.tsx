import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장르별 차트 플랫폼",
  description: "장르를 골라 곡을 등록하면 좋아요 수로 순위가 정해지는 차트를 만드세요. 좋아요 기록은 DB에 저장되고 주간 순위를 집계합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
