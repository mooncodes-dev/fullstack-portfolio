import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 손글씨 소개 페이지",
  description: "손글씨 작품과 연습법을 소개하고, 방문자가 작품에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
