import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "가격대 필터 상점",
  description: "가격 범위, 색상 같은 옵션으로 상품을 좁혀 보는 상점입니다. 상품 속성을 DB에 저장하고 조건을 조합해 조회합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
