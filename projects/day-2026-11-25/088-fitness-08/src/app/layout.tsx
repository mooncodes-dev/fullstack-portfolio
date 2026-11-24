import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등산 체력 관리 기록",
  description: "등산하며 측정한 체력 변화를 기록하고, 산 이름으로 기록을 검색할 수 있다. 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
