import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "중고 거래 흉내 상점",
  description: "사용자가 직접 물건을 올리고 다른 사용자가 구매 신청을 하는 중고 거래 상점입니다. 상품 등록, 판매 상태 변경, 구매 신청을 모두 DB로 관리하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
