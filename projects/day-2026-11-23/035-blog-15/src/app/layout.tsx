import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "뉴스 큐레이션 블로그",
  description: "관심 있는 뉴스를 모아 정리하고, 주제별로 글을 검색할 수 있다. 방문자가 기사에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
