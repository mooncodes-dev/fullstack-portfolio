import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 OST 명곡 모음",
  description: "영화 OST 명곡을 모아 소개하고, 영화 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
