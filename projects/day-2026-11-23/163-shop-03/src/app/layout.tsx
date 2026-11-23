import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 상세 보기 상점",
  description: "상품의 상세 정보와 스펙을 꼼꼼히 보여주는 상점이다. 마음에 드는 상품에 좋아요를 눌러 찜 목록에 담을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
