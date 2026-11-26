import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수제 쿠키 온라인 상점",
  description: "직접 만든 쿠키를 판매하고, 쿠키 종류로 상품을 검색할 수 있다. 상품은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
