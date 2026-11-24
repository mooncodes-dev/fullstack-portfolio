import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "전통 떡 레시피 공유",
  description: "전통 떡 만드는 법을 소개하고, 떡 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
