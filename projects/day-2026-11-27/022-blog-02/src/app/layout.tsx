import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 베이킹 실험 블로그",
  description: "주말마다 시도한 베이킹 실험을 기록하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
