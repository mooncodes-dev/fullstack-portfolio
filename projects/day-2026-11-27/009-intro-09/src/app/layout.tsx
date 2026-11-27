import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 그림 그리기 소개 페이지",
  description: "그린 그림과 그리는 과정을 소개하고, 방문자가 그림에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
