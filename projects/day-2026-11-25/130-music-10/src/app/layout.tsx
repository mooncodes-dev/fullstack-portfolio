import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "카페 배경음악 추천",
  description: "카페에서 틀기 좋은 배경음악을 추천하고, 방문자가 곡에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
