import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 옷차림 가이드",
  description: "계절별 날씨에 맞는 옷차림을 소개하고, 계절로 가이드를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
