import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영상 레시피 사이트",
  description: "요리 영상 링크를 등록하고 썸네일과 함께 보여주는 사이트입니다. 영상 정보는 DB에 저장하고 카테고리 필터와 검색을 붙이세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
