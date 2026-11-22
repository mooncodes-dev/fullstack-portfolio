import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "맛집 여행 기록 사이트",
  description: "여행 중 가본 식당을 음식 사진과 함께 기록하는 사이트입니다. 식당 정보는 DB에 저장되고 도시별·음식 종류별 필터를 붙이세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
