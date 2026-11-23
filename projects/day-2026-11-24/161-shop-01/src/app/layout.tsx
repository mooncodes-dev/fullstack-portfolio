import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 특가 상점",
  description: "주말에만 할인하는 특가 상품을 모아 보여주는 상점이다. 특가 상품을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
