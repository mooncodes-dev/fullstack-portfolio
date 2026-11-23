import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 만든 작은 도구 모음 소개 페이지",
  description: "직접 만든 작은 웹 도구들을 소개하고, 방문자가 도구마다 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
