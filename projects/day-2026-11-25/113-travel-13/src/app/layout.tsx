import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "거제도 섬 여행 기록",
  description: "거제도의 섬과 해변을 기록하고, 장소 이름으로 기록을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
