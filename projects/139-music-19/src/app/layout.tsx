import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 일기 플랫폼",
  description: "날짜마다 그날 들은 곡과 기분을 짧게 기록하는 일기형 플랫폼입니다. 기록은 DB에 저장되고 본인만 볼 수 있으며 달력으로 모아 봅니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
