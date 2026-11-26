import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "퇴근길 음악 모음",
  description: "퇴근길에 듣는 노래를 모아 소개하고, 가수 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
