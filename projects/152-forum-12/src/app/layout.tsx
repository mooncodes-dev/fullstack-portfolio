import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "출석 체크 포럼",
  description: "매일 출석 버튼을 누르면 포인트가 쌓이는 포럼입니다. 출석 기록은 날짜별로 DB에 저장하고 연속 출석 보너스를 계산합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
