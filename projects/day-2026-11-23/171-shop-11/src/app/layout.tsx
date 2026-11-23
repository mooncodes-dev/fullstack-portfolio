import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 추천 상점",
  description: "취향에 맞는 상품을 추천해 주는 상점이다. 상품을 검색하고 추천 상품에 댓글을 달아 의견을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
