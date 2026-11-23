import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영어 공부 블로그",
  description: "매일 배운 영어 표현을 기록하고, 방문자가 표현에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
