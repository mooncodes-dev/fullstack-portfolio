import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "곡 투표 대결 플랫폼",
  description: "두 곡을 붙여 어느 곡이 더 좋은지 투표하고 승률을 보여주는 플랫폼입니다. 투표 기록은 DB에 누적되고 곡별 전적을 계산합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
