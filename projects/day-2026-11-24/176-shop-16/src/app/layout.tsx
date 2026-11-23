import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "농산물 직거래 상점",
  description: "농부가 직접 올린 농산물을 주문할 수 있는 상점이다. 농산물 후기에 댓글을 달아 맛 후기를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
