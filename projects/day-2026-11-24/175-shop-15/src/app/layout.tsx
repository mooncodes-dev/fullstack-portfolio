import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "핸드메이드 마켓 상점",
  description: "작가가 직접 만든 핸드메이드 상품을 모아 파는 상점이다. 상품을 검색해 작가의 작품을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
