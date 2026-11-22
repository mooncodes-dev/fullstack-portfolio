import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 기록 일기 사이트",
  description: "오늘 날씨를 API로 불러와 그날의 기분과 함께 일기로 저장하는 사이트입니다. 날씨 값과 일기 내용은 날짜별로 DB에 기록됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
