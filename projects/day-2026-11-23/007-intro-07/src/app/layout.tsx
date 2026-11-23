import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 감상 노트 소개 페이지",
  description: "본 영화의 감상평을 기록하고, 제목이나 장르로 검색할 수 있다. 감상평은 작성·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
