import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "투표 게시판 포럼",
  description: "글에 선택지를 달아 투표를 받고 결과를 그래프로 보여주는 포럼입니다. 투표는 한 사람 한 번만 가능하게 DB로 제한합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
