import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나만의 믹스테이프 플랫폼",
  description: "좋아하는 곡을 모아 나만의 믹스테이프를 만드는 플랫폼이다. 다른 사람의 믹스테이프에 좋아요를 눌러 인기 믹스테이프를 확인할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
