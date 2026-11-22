import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "관리자 매출 대시보드 상점",
  description: "날짜별 주문 수와 매출 합계를 그래프로 보여주는 관리자 페이지가 있는 상점입니다. 주문 데이터를 DB에서 집계해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
