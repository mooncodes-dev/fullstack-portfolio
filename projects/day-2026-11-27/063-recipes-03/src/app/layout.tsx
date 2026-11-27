import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "채식 요리 레시피 공유",
  description: "채식 요리 레시피를 공유하고, 재료 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
