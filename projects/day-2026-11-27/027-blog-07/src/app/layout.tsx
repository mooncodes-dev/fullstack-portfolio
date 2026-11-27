import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "새벽 독서 기록 블로그",
  description: "새벽에 읽은 책의 인상 깊은 구절을 기록하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
