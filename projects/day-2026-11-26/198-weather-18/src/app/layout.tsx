import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지역별 강수량 비교",
  description: "지역별 강수량을 비교해 소개하고, 지역 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
