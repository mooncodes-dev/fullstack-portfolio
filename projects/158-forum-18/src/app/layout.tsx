import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인기글 자동 선정 포럼",
  description: "조회수와 추천 수를 합산해 매일 인기글을 자동으로 골라 메인에 보여주는 포럼입니다. 집계 기준과 결과를 DB 데이터로 계산하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
