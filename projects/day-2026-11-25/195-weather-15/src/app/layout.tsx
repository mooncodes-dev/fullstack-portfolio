import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "황사 대비 가이드",
  description: "황사 대비 방법을 공유하고, 방문자가 가이드에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
