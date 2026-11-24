import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 날씨 예보 공유",
  description: "주말 날씨 예보를 공유하고, 방문자가 예보에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
