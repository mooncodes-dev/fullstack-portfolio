import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 영화 감상 블로그",
  description: "본 영화의 감상과 평점을 기록하고, 영화 제목으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
