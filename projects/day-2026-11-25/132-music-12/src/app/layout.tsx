import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "힙합 비트 공유 모음",
  description: "만든 힙합 비트를 공유하고, 방문자가 비트에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
