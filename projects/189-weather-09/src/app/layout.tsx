import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "미세먼지 조회 사이트",
  description: "날씨 API와 대기질 API를 함께 연동해 미세먼지 등급을 보여주는 사이트입니다. 조회 기록을 DB에 남기고 등급이 나쁜 날을 표시하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
