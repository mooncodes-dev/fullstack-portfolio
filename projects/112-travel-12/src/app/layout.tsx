import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "숙소 리뷰 사이트",
  description: "묵었던 숙소의 장단점과 별점을 남기는 사이트입니다. 숙소 정보와 리뷰는 DB에 저장되고 도시별 평균 별점을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
