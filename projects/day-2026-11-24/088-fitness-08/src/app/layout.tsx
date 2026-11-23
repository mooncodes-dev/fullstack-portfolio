import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "줄넘기 기록 페이지",
  description: "줄넘기 횟수와 시간을 기록하고, 방문자가 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
