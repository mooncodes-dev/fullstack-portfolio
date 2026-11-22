import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "통계 대시보드 블로그",
  description: "내 글의 조회수, 좋아요, 댓글 수를 모아 보여주는 대시보드를 만드세요. 날짜별 조회수 그래프까지 그리면 데이터 집계 쿼리를 연습할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
