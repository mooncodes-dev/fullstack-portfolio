import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 목표 달성 페이지",
  description: "운동 목표와 달성 현황을 소개하고, 방문자가 목표에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
