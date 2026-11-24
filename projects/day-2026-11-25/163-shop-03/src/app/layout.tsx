import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "빈티지 엽서 상점",
  description: "수집한 빈티지 엽서를 판매하고, 엽서 이름으로 상품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
