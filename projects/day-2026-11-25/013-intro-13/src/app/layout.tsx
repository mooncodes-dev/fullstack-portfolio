import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 악기 연습 기록 소개 페이지",
  description: "연습 중인 악기와 연습 곡을 소개하고, 방문자가 연습 기록에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
