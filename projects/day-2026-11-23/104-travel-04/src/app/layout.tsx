import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행지 이름 검색 일지 사이트",
  description: "여행지 이름을 검색하면 관련 일지가 바로 나오는 사이트이다. 검색 결과를 날짜순이나 인기순으로 정렬해 볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
