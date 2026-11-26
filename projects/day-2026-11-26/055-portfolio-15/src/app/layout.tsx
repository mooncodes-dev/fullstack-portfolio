import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "방송 작가 포트폴리오",
  description: "쓴 방송 대본과 기획안을 소개하고, 방문자가 작품에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
