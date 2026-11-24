import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아날로그 필름 사진 블로그",
  description: "필름 카메라로 찍은 사진을 기록하고, 방문자가 사진 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
