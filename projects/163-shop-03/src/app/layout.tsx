import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주문하기 흉내 상점",
  description: "장바구니에서 주문 버튼을 누르면 주문 내역이 DB에 저장되는 상점입니다. 실제 결제 없이 주문 완료 화면과 내 주문 목록을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
