import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 팟캐스트 모음 소개 페이지",
  description: "즐겨 듣는 팟캐스트와 추천 회차를 소개하고, 방문자가 회차에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
