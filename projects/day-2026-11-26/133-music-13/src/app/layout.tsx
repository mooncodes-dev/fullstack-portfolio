import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "겨울 감성 음악 모음",
  description: "겨울에 듣는 따뜻한 노래를 소개하고, 계절로 곡을 검색할 수 있다. 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
