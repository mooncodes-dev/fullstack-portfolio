import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인디 음악 발굴 플랫폼",
  description: "아직 알려지지 않은 인디 음악을 발굴해 소개하는 플랫폼이다. 아티스트나 곡을 검색해 발굴 목록을 살펴볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
