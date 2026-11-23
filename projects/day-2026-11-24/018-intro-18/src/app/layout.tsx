import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈베이킹 도전 기록 소개 페이지",
  description: "집에서 구운 빵과 과자의 도전 기록을 정리하고, 빵 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
