import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "레시피 댓글과 평점 사이트",
  description: "레시피마다 별점과 후기 댓글을 남길 수 있게 하세요. 평균 별점은 DB에서 집계하고, 별점순 정렬을 제공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
