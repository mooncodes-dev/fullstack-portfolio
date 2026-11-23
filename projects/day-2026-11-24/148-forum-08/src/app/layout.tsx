import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "육아 고민 게시판 포럼",
  description: "육아 고민을 털어놓고 조언을 받는 게시판 포럼이다. 고민 글에 댓글로 조언을 달아 서로를 위로할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
