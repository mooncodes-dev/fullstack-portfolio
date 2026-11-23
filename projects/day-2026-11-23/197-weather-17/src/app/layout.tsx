import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "날씨 정보 검색 포털 사이트",
  description: "여러 지역의 날씨 정보를 한곳에서 검색하는 포털 사이트이다. 지역을 검색하고 날씨 정보에 댓글을 달아 현지 소식을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
