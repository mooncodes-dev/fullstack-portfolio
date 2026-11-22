import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "물 마시기 기록 페이지",
  description: "하루 물 섭취량을 버튼으로 기록하고 목표 달성 여부를 보여주세요. 기록은 날짜별로 DB에 저장되고 연속 달성 일수를 계산합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
