import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "국내 섬 여행 페이지",
  description: "국내 섬의 배편과 여행 코스를 기록하고, 방문자가 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
