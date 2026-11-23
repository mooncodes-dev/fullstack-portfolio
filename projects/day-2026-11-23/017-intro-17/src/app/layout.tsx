import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "살아본 동네 추억 소개 페이지",
  description: "살아본 동네마다의 추억과 장소를 정리하고, 동네별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
