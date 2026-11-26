import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "도예가 작품 포트폴리오",
  description: "빚은 도자기 작품을 소개하고, 작품 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
