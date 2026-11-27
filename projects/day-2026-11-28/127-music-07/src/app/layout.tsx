import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 OST 감상 페이지",
  description: "영화 OST와 장면을 함께 감상하고, 영화 제목으로 검색할 수 있다. 방문자가 곡에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
