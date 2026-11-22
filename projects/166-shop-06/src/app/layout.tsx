import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 리뷰 상점",
  description: "상품마다 별점과 구매 후기를 남기는 상점입니다. 리뷰는 DB에 저장되고 상품별 평균 별점이 목록에 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
