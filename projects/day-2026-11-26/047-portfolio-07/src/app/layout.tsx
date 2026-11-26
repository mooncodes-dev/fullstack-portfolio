import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "콘텐츠 크리에이터 포트폴리오",
  description: "만든 콘텐츠와 채널을 소개하고, 방문자가 콘텐츠에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
