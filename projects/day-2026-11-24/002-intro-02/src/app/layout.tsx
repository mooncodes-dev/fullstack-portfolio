import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 드라마 대사 모음 소개 페이지",
  description: "인상 깊은 드라마 대사를 모아 소개하고, 드라마 이름으로 대사를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
