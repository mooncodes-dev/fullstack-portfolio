import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "카테고리 블로그",
  description: "글을 일상, 공부, 리뷰 같은 카테고리로 나눠 저장하고, 카테고리를 선택하면 해당 글만 필터링해서 보여주는 블로그를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
