import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "추억의 학창 시절 사진 소개 페이지",
  description: "학창 시절 사진을 연도별로 소개하고, 방문자가 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
