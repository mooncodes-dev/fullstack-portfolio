import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출근 전 독서 블로그",
  description: "출근 전에 읽은 책의 내용을 정리하고, 책 제목으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
