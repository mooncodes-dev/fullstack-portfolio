import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "선물하기 상점",
  description: "지인에게 선물할 상품을 골라 메시지와 함께 보내는 상점이다. 선물 후기에 댓글을 달아 추천 선물을 공유할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
