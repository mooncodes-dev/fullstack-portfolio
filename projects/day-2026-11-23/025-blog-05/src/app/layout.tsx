import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요리 일기 블로그",
  description: "직접 해본 요리의 과정과 결과를 기록하고, 요리별로 글을 모아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
