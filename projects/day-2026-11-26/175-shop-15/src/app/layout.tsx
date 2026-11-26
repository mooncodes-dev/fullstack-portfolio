import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요가 용품 상점",
  description: "요가 용품을 판매하고, 방문자가 상품에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
