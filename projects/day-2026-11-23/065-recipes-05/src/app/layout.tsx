import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 요리 레시피 사이트",
  description: "캠핑장에서 해먹는 요리를 소개하고, 레시피를 난이도별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
