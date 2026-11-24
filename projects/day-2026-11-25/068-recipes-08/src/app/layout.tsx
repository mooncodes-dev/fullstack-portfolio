import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "세계의 수프 레시피 모음",
  description: "나라별 수프 레시피를 소개하고, 나라 이름으로 레시피를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
