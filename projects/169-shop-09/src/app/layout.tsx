import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "쿠폰 상점",
  description: "쿠폰 코드를 입력하면 할인율이 적용되는 상점입니다. 쿠폰 정보와 사용 여부는 DB에 저장하고 주문 금액 계산에 반영합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
