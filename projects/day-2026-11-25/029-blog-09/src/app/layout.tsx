import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "절약 생활 꿀팁 블로그",
  description: "생활비를 아끼는 방법을 정리한 글을 올리고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
