import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 요리 레시피 공유",
  description: "캠핑장에서 만드는 요리 레시피를 공유하고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
