import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등 운동 가이드",
  description: "등 근력을 키우는 운동법을 소개하고, 방문자가 가이드에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
