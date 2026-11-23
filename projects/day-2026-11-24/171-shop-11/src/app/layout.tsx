import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "문구류 상점",
  description: "예쁜 문구와 다이어리를 모아 보여주는 상점이다. 추천 상품에 댓글을 달아 의견을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
