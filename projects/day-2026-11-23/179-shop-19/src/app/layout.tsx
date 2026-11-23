import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상점 재고 관리 상점",
  description: "관리자가 상품별 재고를 확인하고 발주를 관리하는 상점이다. 상품을 검색해 재고 현황을 살펴보고 부족한 상품을 정리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
