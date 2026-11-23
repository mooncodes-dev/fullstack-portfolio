import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "과학 상식 블로그",
  description: "재미있는 과학 상식을 정리한 글을 올리고, 주제별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
