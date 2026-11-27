import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "힙합 음악 추천 플랫폼",
  description: "좋아하는 힙합 곡을 추천하고, 아티스트 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
