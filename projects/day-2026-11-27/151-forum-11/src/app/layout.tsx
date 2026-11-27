import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 토론 포럼",
  description: "영화를 보고 토론하는 포럼으로, 영화 제목으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
