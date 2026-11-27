import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "클래식 명곡 감상 페이지",
  description: "좋아하는 클래식 명곡과 해설을 기록하고, 방문자가 곡에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
