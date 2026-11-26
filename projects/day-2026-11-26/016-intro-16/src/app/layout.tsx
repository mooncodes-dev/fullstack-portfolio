import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 자전거 여행 기록 소개 페이지",
  description: "자전거로 다녀온 여행을 소개하고, 코스 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
