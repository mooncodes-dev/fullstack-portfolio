import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요리 자랑 게시판 포럼",
  description: "직접 만든 요리를 사진과 함께 자랑하는 게시판 포럼이다. 요리 사진을 파일 업로드로 첨부하고 글을 등록하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
