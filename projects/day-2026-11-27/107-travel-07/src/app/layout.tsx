import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "시장 탐방 여행 일지",
  description: "여행지 시장의 먹거리와 풍경을 기록하고, 시장 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
