import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "타임세일 상점",
  description: "정해진 시간에만 할인하는 타임세일 상품을 보여주는 상점이다. 상품을 검색하고 마음에 드는 타임세일 상품에 좋아요를 눌러 알림을 받을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
