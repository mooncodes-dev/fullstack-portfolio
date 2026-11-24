import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여름 페스티벌 노래 모음",
  description: "여름 페스티벌에서 듣는 노래를 소개하고, 페스티벌 이름으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
