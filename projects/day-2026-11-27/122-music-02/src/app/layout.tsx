import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동할 때 듣는 음악 공유",
  description: "운동할 때 듣는 곡을 공유하고, 방문자가 곡에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
