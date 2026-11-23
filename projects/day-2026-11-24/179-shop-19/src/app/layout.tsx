import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "명품 중고 상점",
  description: "관리자가 중고 명품의 정품 여부를 검수하는 상점이다. 상품을 검색해 중고 명품을 살펴보고 가격을 비교할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
