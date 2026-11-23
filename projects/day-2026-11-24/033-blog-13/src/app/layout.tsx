import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "별 관측 일지 블로그",
  description: "밤하늘에서 본 별과 달을 기록하고, 관측 날짜별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
