import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 방 꾸미기 전후 소개 페이지",
  description: "방을 꾸미기 전과 후의 모습을 비교해 소개한다. 꾸미기 항목은 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
