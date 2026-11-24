import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "목포 근대 거리 여행 기록",
  description: "목포의 근대 거리와 역사를 기록하고, 방문자가 기록에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
