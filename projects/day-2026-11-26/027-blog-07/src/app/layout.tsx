import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바다 사진 기록 블로그",
  description: "바닷가에서 찍은 사진을 정리하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
