import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "게임 공략 포럼",
  description: "게임 공략을 나누는 포럼으로, 게임 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
