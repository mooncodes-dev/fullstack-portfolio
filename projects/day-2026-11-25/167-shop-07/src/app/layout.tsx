import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수제 잼 상점",
  description: "직접 만든 잼을 판매하고, 방문자가 상품에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
