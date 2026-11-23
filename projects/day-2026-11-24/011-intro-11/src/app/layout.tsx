import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 운동 전후 변화 소개 페이지",
  description: "운동을 시작하기 전과 후의 변화를 기록하고, 방문자가 댓글로 응원을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
