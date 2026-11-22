import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "곡 리뷰 플랫폼",
  description: "곡마다 감상평과 별점을 남기는 플랫폼입니다. 리뷰는 DB에 저장되고 곡별 평균 별점과 리뷰 수가 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
