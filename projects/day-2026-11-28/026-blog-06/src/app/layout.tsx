import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 악기 연주 기록 블로그",
  description: "연습한 곡과 연주 영상을 기록하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
