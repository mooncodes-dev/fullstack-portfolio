import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댓글 블로그",
  description: "글 상세 페이지에 댓글을 달 수 있게 하세요. 댓글은 DB에 저장되고, 댓글 작성자만 삭제할 수 있으며, 글 목록에 댓글 개수가 함께 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
