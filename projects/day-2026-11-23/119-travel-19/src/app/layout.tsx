import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행지 인기 랭킹 사이트",
  description: "좋아요와 댓글 수를 합산해 여행지 인기 순위를 보여주는 사이트이다. 여행지 이름을 검색하면 순위를 바로 확인하고 일지를 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
