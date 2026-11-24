import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "손수건 온라인 상점",
  description: "직접 만든 손수건 상품을 소개하고, 손수건 무늬로 상품을 검색할 수 있다. 상품은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
