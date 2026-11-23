import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바리스타 포트폴리오",
  description: "만든 커피 메뉴와 라떼아트 사진을 소개하고, 메뉴를 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
