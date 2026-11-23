import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 언어 교환 일지 소개 페이지",
  description: "언어 교환으로 만난 친구와 나눈 이야기를 기록하고, 방문자가 일지에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
