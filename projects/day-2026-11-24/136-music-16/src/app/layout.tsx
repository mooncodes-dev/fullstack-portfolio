import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "드럼 연습 기록 플랫폼",
  description: "드럼 연습의 리듬과 곡을 기록하는 플랫폼이다. 마음에 드는 연습 기록에 좋아요를 눌러 응원할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
