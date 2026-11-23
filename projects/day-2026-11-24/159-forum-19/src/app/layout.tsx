import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 계획 게시판 포럼",
  description: "여행 계획을 세우고 동행자를 찾는 게시판 포럼이다. 여행지 사진을 파일 업로드로 첨부하고 계획 글을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
