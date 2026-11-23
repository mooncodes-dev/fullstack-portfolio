import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아침 루틴 공유 소개 페이지",
  description: "아침에 하는 일들을 단계별로 소개하고, 방문자가 댓글로 자신의 루틴을 공유할 수 있다. 루틴 항목은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
