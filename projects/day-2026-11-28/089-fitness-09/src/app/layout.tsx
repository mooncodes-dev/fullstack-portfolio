import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "단백질 식단과 운동 기록 페이지",
  description: "단백질 식단과 운동을 함께 기록하고, 날짜로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
