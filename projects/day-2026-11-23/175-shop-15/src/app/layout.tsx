import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 태그 탐색 상점",
  description: "태그를 골라 원하는 상품을 탐색하는 상점이다. 태그를 검색하면 관련 상품을 한 번에 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
