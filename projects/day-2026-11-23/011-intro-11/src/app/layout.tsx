import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인턴십 경험 스토리 소개 페이지",
  description: "인턴으로 일하며 배운 점을 스토리 형식으로 소개하고, 방문자가 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
