import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다이어트 레시피 사이트",
  description: "저칼로리 레시피를 칼로리 순으로 모아보고, 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
