import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 영화 명장면 소개 페이지",
  description: "인상 깊은 영화 장면을 모아 소개하고, 방문자가 장면에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
