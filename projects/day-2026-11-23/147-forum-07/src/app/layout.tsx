import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "후기 게시판 포럼",
  description: "제품이나 장소 이용 후기를 사진과 함께 남기는 게시판 포럼이다. 후기 사진을 파일 업로드로 첨부하고 글을 등록하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
