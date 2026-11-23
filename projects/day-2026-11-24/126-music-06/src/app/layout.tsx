import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "크리스마스 캐럴 모음 플랫폼",
  description: "크리스마스 캐럴과 겨울 노래를 모아 소개하는 플랫폼이다. 곡을 검색하고 마음에 드는 캐럴에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
