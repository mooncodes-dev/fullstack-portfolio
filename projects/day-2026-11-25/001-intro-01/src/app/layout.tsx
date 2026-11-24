import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 아침 루틴 소개 페이지",
  description: "매일 아침 루틴을 시간대별로 소개하고, 루틴 이름으로 검색할 수 있다. 루틴 항목은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
