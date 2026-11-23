import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인터뷰 기록 블로그",
  description: "만난 사람들의 인터뷰를 정리하고, 인터뷰이별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
