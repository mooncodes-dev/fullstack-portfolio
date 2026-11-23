import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "테니스 기록 페이지",
  description: "테니스 경기 결과와 연습 코스를 정리하고, 코스를 검색해 기록을 찾을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
