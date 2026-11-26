import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "생일 축하 음악 모음",
  description: "생일에 듣는 축하 노래를 소개하고, 방문자가 곡에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
