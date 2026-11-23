import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "마라톤 준비 페이지",
  description: "마라톤 훈련 계획을 주차별로 정리하고, 훈련 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
