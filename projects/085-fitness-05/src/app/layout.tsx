import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "식단 기록 페이지",
  description: "먹은 음식과 칼로리를 기록하는 페이지입니다. 음식 이름과 칼로리를 DB에 쌓고 하루 총 섭취량을 자동 계산합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
