import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "1+1 행사 상점",
  description: "하나를 사면 하나를 더 주는 행사 상품을 소개하는 상점이다. 상품 이름을 검색해 행사 상품을 바로 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
