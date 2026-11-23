import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "장바구니 할인 계산 상점",
  description: "회원가입과 로그인을 하면 장바구니 상품의 할인 금액을 미리 계산해 주는 상점이다. 장바구니에 좋아요를 누른 상품을 담아 할인 혜택을 비교할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
