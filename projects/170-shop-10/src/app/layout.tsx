import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "배송지 관리 상점",
  description: "주문할 때 쓸 배송지를 여러 개 저장하고 골라 쓰는 상점입니다. 배송지는 사용자별로 DB에 저장되고 기본 배송지를 지정할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
