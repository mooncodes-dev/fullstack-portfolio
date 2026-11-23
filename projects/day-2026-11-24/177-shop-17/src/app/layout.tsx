import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수산물 직거래 상점",
  description: "어부가 직접 잡은 수산물을 소개하는 상점이다. 상품을 검색하고 신선한 수산물에 좋아요를 눌러 찜해 둘 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
