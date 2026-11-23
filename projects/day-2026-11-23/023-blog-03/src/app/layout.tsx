import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "개발 공부 일지 블로그",
  description: "공부한 내용을 정리한 글을 올리고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
