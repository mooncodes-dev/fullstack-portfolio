import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "예약 판매 상점",
  description: "아직 출시 전인 상품의 예약을 받고 예약자 명단을 관리하는 상점입니다. 예약 신청은 DB에 저장되고 취소도 가능합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
