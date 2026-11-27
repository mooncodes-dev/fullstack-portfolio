import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 페스티벌 일정 페이지",
  description: "전국 음악 페스티벌의 일정과 라인업을 기록하고, 페스티벌 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
