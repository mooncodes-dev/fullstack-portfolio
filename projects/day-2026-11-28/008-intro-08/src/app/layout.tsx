import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 운동 목표 소개 페이지",
  description: "올해 운동 목표와 달성 현황을 소개하고, 목표를 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
