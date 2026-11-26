import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "플랭크 챌린지 기록",
  description: "매일 플랭크 시간을 기록하고, 방문자가 기록에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
