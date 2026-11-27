import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "뮤지컬 넘버 소개 페이지",
  description: "뮤지컬의 대표 넘버와 줄거리를 소개하고, 방문자가 넘버에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
