import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요리사 레시피 포트폴리오",
  description: "만든 요리와 레시피를 소개하고, 방문자가 요리에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
