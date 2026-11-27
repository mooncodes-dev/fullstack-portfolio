import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동화 일러스트레이터 포트폴리오",
  description: "그린 동화 삽화를 모아 보여주고, 방문자가 삽화에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
