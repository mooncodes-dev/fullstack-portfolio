import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "베스트 리뷰어 상점",
  description: "도움이 되는 리뷰를 많이 쓴 리뷰어를 소개하는 상점이다. 리뷰에 댓글과 좋아요를 달아 좋은 리뷰어를 응원할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
