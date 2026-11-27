import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "일본 온천 여행 페이지",
  description: "일본 온천 마을의 숙소와 온천을 기록하고, 온천 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
