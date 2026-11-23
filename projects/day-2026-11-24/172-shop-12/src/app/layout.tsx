import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "가구 인테리어 상점",
  description: "방을 꾸미는 가구와 소품을 소개하는 상점이다. 마음에 드는 가구 상품에 좋아요를 눌러 인테리어 목록을 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
