import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수면 기록 페이지",
  description: "잠든 시간과 일어난 시간을 기록해 수면 시간을 계산하고 주간 평균을 보여주는 페이지입니다. 기록은 DB에 저장되고 컨디션 점수와 함께 남길 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
