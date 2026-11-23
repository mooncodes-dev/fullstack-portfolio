import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "광고 음악 모음 플랫폼",
  description: "광고에 쓰인 음악을 모아 소개하는 플랫폼이다. 음악에 댓글을 달아 광고와 곡에 대한 이야기를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
