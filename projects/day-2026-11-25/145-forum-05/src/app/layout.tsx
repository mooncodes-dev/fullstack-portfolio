import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출근길 독서 모임 포럼",
  description: "출근길 독서 모임의 후기를 나누고, 방문자가 글에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
