import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 감상 토론 포럼",
  description: "본 영화의 감상을 토론하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
