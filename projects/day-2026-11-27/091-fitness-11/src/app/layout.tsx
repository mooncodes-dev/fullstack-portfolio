import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체중 변화 기록 페이지",
  description: "체중 변화를 그래프와 함께 기록하고, 날짜로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
