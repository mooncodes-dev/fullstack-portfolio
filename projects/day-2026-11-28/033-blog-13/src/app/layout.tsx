import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저녁 러닝 기록 블로그",
  description: "저녁 러닝 코스와 기록을 정리하고, 방문자가 글에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
