import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 외국어 회화 블로그",
  description: "매일 연습한 회화 표현을 기록하고, 표현으로 글을 검색할 수 있다. 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
