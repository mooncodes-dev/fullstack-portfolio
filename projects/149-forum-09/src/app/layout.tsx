import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "검색과 정렬 포럼",
  description: "제목, 작성자, 내용으로 검색하고 최신순·조회순·추천순으로 정렬하는 포럼입니다. 조회는 서버에서 DB로 처리합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
