import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "북마크와 구독 포럼",
  description: "관심 글을 북마크하고, 관심 게시판의 새 글을 모아 보는 기능을 붙인 포럼입니다. 북마크와 구독 정보는 사용자별로 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
