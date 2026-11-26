import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "드립 커피 상점",
  description: "다양한 드립 커피를 판매하고, 커피 이름으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
