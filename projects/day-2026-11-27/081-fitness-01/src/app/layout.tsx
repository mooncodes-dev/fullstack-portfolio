import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아침 스트레칭 루틴 페이지",
  description: "아침 스트레칭 동작을 소개하고, 동작 이름으로 검색할 수 있다. 루틴은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
