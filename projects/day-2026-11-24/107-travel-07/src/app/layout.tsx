import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "산골 마을 여행 일지 사이트",
  description: "산골 마을의 조용한 매력을 기록하는 사이트이다. 일지에 좋아요를 누르고 댓글을 달아 추억을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
