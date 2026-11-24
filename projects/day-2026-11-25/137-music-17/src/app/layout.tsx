import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "추억의 애니메이션 노래",
  description: "애니메이션 주제가를 모아 소개하고, 방문자가 곡에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
