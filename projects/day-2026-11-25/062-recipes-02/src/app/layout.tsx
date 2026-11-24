import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "한 그릇 국수 레시피 공유",
  description: "다양한 국수 레시피를 공유하고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
