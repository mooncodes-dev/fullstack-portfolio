import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "데이터 분석가 포트폴리오",
  description: "분석 프로젝트와 시각화 결과를 소개하고, 프로젝트를 분야별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
