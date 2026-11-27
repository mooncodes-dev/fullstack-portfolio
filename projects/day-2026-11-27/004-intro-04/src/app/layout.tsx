import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 영화 소개 페이지",
  description: "좋아하는 영화와 명장면을 소개하고, 영화 제목으로 검색할 수 있다. 방문자가 영화에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
