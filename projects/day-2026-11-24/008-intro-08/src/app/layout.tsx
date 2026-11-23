import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출근길 플레이리스트 소개 페이지",
  description: "출근길에 듣는 노래 목록을 소개하고, 방문자가 플레이리스트에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
