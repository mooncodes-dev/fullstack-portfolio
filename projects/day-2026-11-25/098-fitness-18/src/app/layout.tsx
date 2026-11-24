import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "마라톤 훈련 일지",
  description: "마라톤 훈련 거리와 페이스를 기록하고, 훈련 주차로 일지를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
