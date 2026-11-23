import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "어린이 운동 놀이 페이지",
  description: "아이와 함께 하는 운동 놀이를 소개하고, 방문자가 놀이에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
