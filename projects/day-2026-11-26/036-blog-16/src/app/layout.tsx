import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "새벽 글쓰기 블로그",
  description: "새벽에 쓴 글과 생각을 기록하고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
