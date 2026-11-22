import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "카테고리 레시피 사이트",
  description: "한식, 양식, 디저트처럼 카테고리로 레시피를 나누고 필터링해서 보여주세요. 조리 시간과 난이도 필터도 함께 붙이면 좋습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
