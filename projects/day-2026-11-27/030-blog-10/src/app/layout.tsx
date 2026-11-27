import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 재테크 공부 블로그",
  description: "재테크 공부 내용과 실천 기록을 정리하고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
