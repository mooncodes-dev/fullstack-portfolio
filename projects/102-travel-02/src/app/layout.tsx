import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "지도 없는 여행 기록 사이트",
  description: "다녀온 도시 목록을 DB에 저장하고 나라별·도시별로 일지를 필터링해서 보여주는 사이트를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
