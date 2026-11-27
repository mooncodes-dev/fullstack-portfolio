import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "세계 길거리 음식 레시피 사이트",
  description: "나라별 길거리 음식 레시피를 소개하고, 나라 이름으로 검색할 수 있다. 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
