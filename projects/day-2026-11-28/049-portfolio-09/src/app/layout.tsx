import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캘리그라퍼 포트폴리오",
  description: "쓴 캘리그라피 작품을 모아 보여주고, 작품을 추가·수정·삭제할 수 있다. 방문자가 작품에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
