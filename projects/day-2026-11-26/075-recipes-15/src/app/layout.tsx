import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여름 냉국 레시피 모음",
  description: "여름에 먹는 시원한 냉국을 소개하고, 방문자가 레시피에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
