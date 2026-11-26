import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "무산소 운동 기록",
  description: "무산소 운동의 세트와 무게를 기록하고, 방문자가 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
