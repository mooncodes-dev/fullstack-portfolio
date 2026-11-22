import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인기 상품 랭킹 상점",
  description: "판매량과 조회수를 기준으로 인기 상품 순위를 보여주는 상점입니다. 주문 데이터를 집계해 주간 랭킹을 계산하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
