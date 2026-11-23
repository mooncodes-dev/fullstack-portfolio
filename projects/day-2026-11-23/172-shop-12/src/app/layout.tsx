import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "브랜드관 상점",
  description: "브랜드별로 상품을 모아 보여주는 상점이다. 마음에 드는 브랜드 상품에 좋아요를 눌러 브랜드별 인기 상품을 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
