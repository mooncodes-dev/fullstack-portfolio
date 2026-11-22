import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아티스트 팬 페이지 플랫폼",
  description: "아티스트 소개와 대표곡을 등록하고 팬들이 응원 댓글을 남기는 플랫폼입니다. 아티스트 정보와 댓글은 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
