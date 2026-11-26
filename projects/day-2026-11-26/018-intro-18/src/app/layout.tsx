import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 새해 목표 소개 페이지",
  description: "새해에 이루고 싶은 목표를 소개하고, 방문자가 목표에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
