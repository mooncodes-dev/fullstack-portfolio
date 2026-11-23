import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스포츠 응원 게시판 포럼",
  description: "응원하는 팀과 선수를 응원하는 게시판 포럼이다. 응원 글에 좋아요를 눌러 열기를 모을 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
