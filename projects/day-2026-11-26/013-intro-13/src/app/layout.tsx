import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 일기 쓰기 습관 소개 페이지",
  description: "일기를 쓰는 습관과 방법을 소개하고, 방문자가 습관 글에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
