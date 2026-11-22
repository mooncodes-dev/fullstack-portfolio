import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기본 CRUD 블로그",
  description: "글을 쓰고, 목록에서 읽고, 수정하고, 삭제하는 블로그의 기본형을 만드세요. 글은 제목, 본문, 작성일과 함께 DB에 저장됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
