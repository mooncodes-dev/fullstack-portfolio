import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "메이크업 아티스트 포트폴리오",
  description: "메이크업 작업 사진을 소개하고, 방문자가 스타일별로 사진을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
