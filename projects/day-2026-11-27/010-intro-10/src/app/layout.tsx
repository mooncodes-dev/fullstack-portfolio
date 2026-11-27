import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 커피 취향 소개 페이지",
  description: "좋아하는 커피 원두와 추출법을 소개하고, 원두 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
