import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "산책 일기 블로그",
  description: "매일 산책하며 본 풍경과 생각을 기록하고, 날짜별 글을 모아볼 수 있다. 글은 작성·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
