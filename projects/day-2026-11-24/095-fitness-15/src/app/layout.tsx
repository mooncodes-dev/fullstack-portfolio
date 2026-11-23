import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스쿼시 운동 기록 페이지",
  description: "스쿼시 경기와 랠리 기록을 정리하고, 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
