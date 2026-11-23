import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "채소 반찬 레시피 사이트",
  description: "제철 채소로 만드는 반찬을 소개하고, 반찬 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
