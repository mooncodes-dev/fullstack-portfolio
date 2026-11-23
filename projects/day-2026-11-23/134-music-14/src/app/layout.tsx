import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 추천 댓글 플랫폼",
  description: "노래 추천 글에 댓글로 또 다른 노래를 추천하는 플랫폼이다. 추천 댓글에 좋아요를 눌러 좋은 추천을 골라낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
