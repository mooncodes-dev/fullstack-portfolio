import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지역 특산품 상점",
  description: "지역 특산품을 파는 상점으로, 지역 이름으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
