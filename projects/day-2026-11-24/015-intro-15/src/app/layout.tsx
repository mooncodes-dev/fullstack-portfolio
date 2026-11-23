import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 재테크 공부 노트 소개 페이지",
  description: "공부한 재테크 개념과 투자 기록을 정리하고, 방문자가 노트에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
