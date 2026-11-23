import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "해산물 레시피 사이트",
  description: "생선과 해산물 요리법을 정리하고, 방문자가 레시피에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
