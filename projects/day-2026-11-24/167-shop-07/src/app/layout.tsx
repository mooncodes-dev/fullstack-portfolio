import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려동물 용품 상점",
  description: "반려동물 사료와 용품을 소개하는 상점이다. 용품 리뷰에 댓글과 좋아요를 달아 좋은 상품을 골라낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
