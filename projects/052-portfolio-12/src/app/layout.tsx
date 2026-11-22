import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "검색 가능한 포트폴리오",
  description: "프로젝트 제목, 설명, 기술에서 키워드를 검색할 수 있게 하세요. 검색 결과는 서버에서 DB를 조회해 돌려줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
