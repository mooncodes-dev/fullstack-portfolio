import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "별 보기 좋은 여행지 페이지",
  description: "별 관측이 좋은 여행지와 관측 팁을 기록하고, 장소 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
