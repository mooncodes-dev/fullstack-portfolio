import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 쓴 글 모음 소개 페이지",
  description: "소개 페이지 안에 작은 글 목록 섹션을 만들어, 다른 블로그 서비스가 아닌 내 DB에 저장된 글을 불러와 보여주세요. 글마다 조회수를 기록하고 인기순 정렬도 구현합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
