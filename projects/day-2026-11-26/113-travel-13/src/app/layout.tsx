import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "광주 문화 여행 기록",
  description: "광주의 문화 공간과 전시를 기록하고, 장소 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
