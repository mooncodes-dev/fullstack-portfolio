import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈트레이닝 루틴 공유",
  description: "집에서 하는 운동 루틴을 공유하고, 방문자가 루틴에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
