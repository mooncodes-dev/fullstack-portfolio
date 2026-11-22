import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "검색 블로그",
  description: "제목과 본문에 포함된 키워드로 글을 검색하는 기능을 구현하세요. 검색어는 서버에서 DB를 조회해 결과를 돌려주고, 결과 개수와 하이라이트 표시까지 해보면 좋습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
