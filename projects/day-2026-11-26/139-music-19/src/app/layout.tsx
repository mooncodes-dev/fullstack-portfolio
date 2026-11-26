import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "추억의 동요 모음",
  description: "어릴 적 부르던 동요를 모아 소개하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
