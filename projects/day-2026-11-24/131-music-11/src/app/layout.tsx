import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "OST 명곡 모음 플랫폼",
  description: "영화와 드라마의 OST 명곡을 모아 소개하는 플랫폼이다. OST를 검색하고 마음에 드는 곡에 좋아요를 눌러 저장할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
