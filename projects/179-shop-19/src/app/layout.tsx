import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포인트 적립 상점",
  description: "주문 금액의 일부가 포인트로 쌓이고 다음 주문에 쓸 수 있는 상점입니다. 포인트 잔액과 사용 내역은 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
