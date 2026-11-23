import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "잠들기 전 음악 플랫폼",
  description: "잠들기 전에 듣는 잔잔한 음악을 소개하는 플랫폼이다. 곡에 댓글을 달아 감상을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
