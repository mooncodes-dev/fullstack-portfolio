import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "모바일 게임 개발자 포트폴리오",
  description: "개발한 모바일 게임을 플레이 영상과 함께 소개하고, 방문자가 게임에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
