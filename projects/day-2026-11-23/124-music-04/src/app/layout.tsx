import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "가사 속 명대사 모음 플랫폼",
  description: "인상 깊은 가사 구절을 모아 공유하는 플랫폼이다. 구절에 댓글을 달아 해석과 감상을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
