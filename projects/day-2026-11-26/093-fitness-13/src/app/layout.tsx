import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 통근 운동 기록",
  description: "자전거로 출퇴근하며 쌓은 운동 기록을 정리하고, 코스 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
