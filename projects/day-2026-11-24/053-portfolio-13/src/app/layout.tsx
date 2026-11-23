import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "번역가 포트폴리오",
  description: "번역한 책과 문서 목록을 정리하고, 방문자가 번역 사례에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
