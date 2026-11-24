import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캘리그라피 작가 포트폴리오",
  description: "쓴 캘리그라피 작품을 소개하고, 작품 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
