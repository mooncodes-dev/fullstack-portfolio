import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전통 도자기 공예품 상점",
  description: "전통 도자기 공예품을 파는 상점으로, 방문자가 상품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
