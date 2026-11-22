import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재고 표시 상점",
  description: "상품 재고를 DB에 저장해 품절 상품은 구매 버튼을 비활성화하는 상점입니다. 주문이 들어오면 재고가 자동으로 줄어들게 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
