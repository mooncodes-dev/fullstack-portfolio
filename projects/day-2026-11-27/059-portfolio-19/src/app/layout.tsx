import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프리랜서 작가 포트폴리오",
  description: "쓴 글과 기고 기사를 모아 보여주고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
