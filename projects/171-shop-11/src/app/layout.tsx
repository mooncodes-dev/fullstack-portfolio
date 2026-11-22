import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주문 상태 상점",
  description: "주문 상태(준비 중, 배송 중, 완료)를 관리자가 바꾸고 구매자가 내 주문에서 확인할 수 있는 상점입니다. 상태 변경 이력을 DB에 남기면 더 좋습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
