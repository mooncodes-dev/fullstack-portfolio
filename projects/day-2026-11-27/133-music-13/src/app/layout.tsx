import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "악기 연주곡 공유",
  description: "악기로 연주한 곡을 공유하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
