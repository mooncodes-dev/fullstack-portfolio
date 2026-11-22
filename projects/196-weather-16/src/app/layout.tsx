import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "과거 날씨 조회 사이트",
  description: "API나 직접 쌓은 데이터로 특정 날짜의 과거 날씨를 조회하는 사이트입니다. 날짜별 날씨 데이터를 DB에 저장하는 구조부터 설계하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
