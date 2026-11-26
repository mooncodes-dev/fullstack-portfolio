import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "미니 식물 상점",
  description: "작은 미니 식물을 소개하고, 식물 이름으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
