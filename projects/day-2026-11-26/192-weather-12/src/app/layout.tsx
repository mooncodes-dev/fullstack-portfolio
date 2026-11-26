import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "별 보이는 날 기록",
  description: "별이 잘 보이는 날의 날씨를 기록하고, 방문자가 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
