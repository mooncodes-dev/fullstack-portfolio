import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 후기 검색 사이트",
  description: "도시 이름이나 키워드로 다른 사람의 여행 후기를 검색하는 사이트입니다. 검색은 서버에서 DB를 조회하고, 조회수 순 정렬도 제공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
