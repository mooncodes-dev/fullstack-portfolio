import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아이 도시락 레시피 모음",
  description: "아이를 위한 도시락 메뉴를 소개하고, 도시락 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
