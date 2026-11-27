import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 하루 한 줄 블로그",
  description: "하루를 한 줄로 기록하고, 날짜로 글을 검색할 수 있다. 글은 작성·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
