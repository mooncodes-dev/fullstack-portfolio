import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "걷기 운동 코스 기록",
  description: "걸으며 운동한 코스와 거리를 기록하고, 방문자가 코스에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
