import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈트 장비 리뷰 페이지",
  description: "덤벨, 매트 같은 운동 장비의 리뷰와 별점을 공유하는 페이지입니다. 리뷰는 DB에 저장되고 장비별 평균 별점을 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
