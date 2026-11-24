import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "밤하늘 사진 블로그",
  description: "밤에 찍은 달과 별 사진을 기록하고, 방문자가 사진 글에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
