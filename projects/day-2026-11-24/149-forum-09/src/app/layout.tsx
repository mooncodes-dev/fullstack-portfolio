import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "이직 고민 게시판 포럼",
  description: "이직 고민과 면접 후기를 나누는 게시판 포럼이다. 글에 좋아요를 눌러 응원하고 싶은 사연을 골라낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
