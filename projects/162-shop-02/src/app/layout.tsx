import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장바구니 상점",
  description: "상품을 장바구니에 담고 수량을 바꾸고 총액을 계산하는 상점입니다. 장바구니는 로그인 사용자별로 DB에 저장해 다른 기기에서도 이어서 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
