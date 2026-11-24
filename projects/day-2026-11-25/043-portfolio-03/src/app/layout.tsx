import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사진작가 웨딩 포트폴리오",
  description: "촬영한 웨딩 사진을 소개하고, 촬영 스타일로 작품을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
