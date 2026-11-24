import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 맛집 탐방 블로그",
  description: "동네 맛집의 메뉴와 후기를 기록하고, 방문자가 맛집 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
