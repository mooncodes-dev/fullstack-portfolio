import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "단편 소설 블로그",
  description: "쓴 단편 소설을 연재하고, 방문자가 회차마다 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
