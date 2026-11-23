import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체중 감량 챌린지 페이지",
  description: "체중 감량 목표와 주간 변화를 기록하고, 방문자가 챌린지에 댓글로 응원을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
