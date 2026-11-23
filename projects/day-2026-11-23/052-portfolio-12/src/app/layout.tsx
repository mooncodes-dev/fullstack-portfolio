import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신입 개발자 포트폴리오",
  description: "공부한 기술과 만든 프로젝트를 정리하고, 프로젝트를 기술별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
