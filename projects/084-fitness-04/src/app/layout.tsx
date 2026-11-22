import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체중 기록 그래프 페이지",
  description: "몸무게를 입력하면 날짜별 변화 그래프를 보여주는 페이지입니다. 기록은 DB에 저장되고 목표 체중과의 차이도 계산해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
