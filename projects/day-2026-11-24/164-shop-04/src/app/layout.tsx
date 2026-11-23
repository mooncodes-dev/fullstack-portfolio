import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오늘 출발 당일 배송 상점",
  description: "오늘 주문하면 오늘 출발하는 상품을 보여주는 상점이다. 배송 후기에 댓글을 달아 후기를 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
