import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 검색과 카테고리 상점",
  description: "카테고리별로 상품을 나누고 이름으로 검색할 수 있는 상점입니다. 검색과 필터는 서버에서 DB를 조회해 처리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
