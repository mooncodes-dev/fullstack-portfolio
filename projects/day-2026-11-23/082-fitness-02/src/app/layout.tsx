import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요가 동작 가이드 페이지",
  description: "요가 동작을 난이도별로 소개하고, 동작을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
