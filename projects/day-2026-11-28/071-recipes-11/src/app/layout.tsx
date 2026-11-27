import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "라면 업그레이드 레시피 사이트",
  description: "라면을 색다르게 즐기는 레시피를 소개하고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
