import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일정표 사이트",
  description: "날짜와 시간대별로 방문 장소와 메모를 적는 일정표를 만들고 저장하세요. 일정은 여행별로 DB에 저장되고 순서 변경도 가능합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
