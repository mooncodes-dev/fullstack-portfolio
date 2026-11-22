import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 랭킹 사이트",
  description: "조회수, 좋아요, 평점을 합산해 이번 주 인기 레시피 랭킹을 보여주세요. 기록은 DB에 쌓고 기간별 집계를 구현합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
