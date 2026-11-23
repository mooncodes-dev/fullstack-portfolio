import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 노래 소개 플랫폼",
  description: "좋아하는 노래를 소개하는 글을 등록하고 조회하고 수정하고 삭제할 수 있는 플랫폼이다. 노래별로 소개 글을 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
