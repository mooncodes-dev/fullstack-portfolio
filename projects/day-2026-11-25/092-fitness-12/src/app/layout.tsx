import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "클라이밍 루트 기록",
  description: "오른 클라이밍 루트와 난이도를 기록하고, 방문자가 루트에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
