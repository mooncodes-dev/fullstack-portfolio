import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "맛집 탐방 블로그",
  description: "다녀온 맛집의 메뉴와 평점을 기록하고, 지역이나 음식 종류로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
