import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주간 식단표 레시피 사이트",
  description: "레시피를 골라 요일별 식단표에 배치하고 저장하는 기능입니다. 식단표는 로그인 사용자별로 DB에 저장되고, 식단표에서 바로 장보기 목록을 뽑아줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
