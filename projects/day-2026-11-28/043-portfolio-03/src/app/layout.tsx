import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "보드게임 개발자 포트폴리오",
  description: "개발한 보드게임과 룰북을 소개하고, 게임 제목으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
