import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아침 식사 레시피 공유",
  description: "아침 식사 레시피를 공유하고, 레시피 이름으로 검색할 수 있다. 레시피는 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
