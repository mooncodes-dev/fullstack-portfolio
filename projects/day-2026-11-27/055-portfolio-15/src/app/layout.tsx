import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "무용수 포트폴리오",
  description: "공연 영상과 안무를 소개하고, 공연 제목으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
