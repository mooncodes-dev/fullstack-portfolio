import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "시장 탐방 여행 일지 사이트",
  description: "여행지 시장을 탐방한 기록을 남기는 사이트이다. 시장 이름을 검색하면 관련 일지를 모아 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
