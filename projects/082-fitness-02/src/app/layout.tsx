import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내 운동 기록 페이지",
  description: "날짜별로 어떤 운동을 몇 세트 했는지 기록하는 페이지입니다. 기록은 로그인 사용자별로 DB에 저장되고 달력 형태로 모아 볼 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
