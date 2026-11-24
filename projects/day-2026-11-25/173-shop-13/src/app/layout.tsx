import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "커피 원두 상점",
  description: "다양한 커피 원두를 판매하고, 원두 이름으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
