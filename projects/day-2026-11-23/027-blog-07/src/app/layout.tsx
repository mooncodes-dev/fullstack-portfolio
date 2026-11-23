import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 감상 블로그",
  description: "들은 음악의 감상을 기록하고, 방문자가 댓글로 추천 곡을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
