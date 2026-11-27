import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "경주 역사 여행 페이지",
  description: "경주의 유적과 역사 이야기를 기록하고, 유적 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
