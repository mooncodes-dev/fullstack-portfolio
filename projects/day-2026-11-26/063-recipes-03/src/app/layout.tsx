import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "채소 수프 레시피 모음",
  description: "채소로 만드는 수프를 소개하고, 재료로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
