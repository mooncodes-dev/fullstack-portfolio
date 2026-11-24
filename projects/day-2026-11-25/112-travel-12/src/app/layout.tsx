import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "담양 대나무 숲 여행 기록",
  description: "담양의 대나무 숲과 명소를 기록하고, 방문자가 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
