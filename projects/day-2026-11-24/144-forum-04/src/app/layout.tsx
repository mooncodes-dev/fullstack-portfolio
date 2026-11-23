import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 토론 게시판 포럼",
  description: "본 영화에 대해 토론하는 게시판 포럼이다. 마음에 드는 토론 글에 좋아요를 눌러 좋은 의견을 골라낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
