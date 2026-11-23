import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기타 연습 기록 플랫폼",
  description: "기타 연습한 곡과 코드를 기록하는 플랫폼이다. 연습 기록에 댓글을 달아 서로의 연습을 응원할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
