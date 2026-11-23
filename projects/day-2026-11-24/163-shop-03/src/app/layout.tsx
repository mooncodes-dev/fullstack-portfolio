import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "무료 배송 상품 상점",
  description: "무료 배송이 되는 상품을 모아 보여주는 상점이다. 마음에 드는 상품에 좋아요를 눌러 찜 목록에 담을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
