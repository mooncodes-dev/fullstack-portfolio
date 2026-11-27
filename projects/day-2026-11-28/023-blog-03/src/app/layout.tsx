import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 새벽 조깅 블로그",
  description: "새벽 조깅 코스와 기록을 정리하고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
