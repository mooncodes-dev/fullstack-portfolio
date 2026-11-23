import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자동차 정보 게시판 포럼",
  description: "자동차 구입과 관리 정보를 나누는 게시판 포럼이다. 차량 사진을 파일 업로드로 첨부하고 글에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
