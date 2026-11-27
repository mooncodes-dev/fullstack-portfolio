import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 악기 연습 소개 페이지",
  description: "연습하는 악기와 연습 곡을 소개하고, 연습 기록을 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
