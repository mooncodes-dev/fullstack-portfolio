import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동 타이머와 기록 연동 페이지",
  description: "운동 타이머로 측정한 운동 시간을 그대로 오늘의 기록으로 저장하는 페이지입니다. 타이머 결과는 서버로 보내 DB에 남기고 주간 통계를 냅니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
