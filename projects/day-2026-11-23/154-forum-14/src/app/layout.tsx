import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 포인트 상점 포럼",
  description: "활동으로 모은 포인트로 상품을 교환하는 게시판 포럼이다. 상품 사진을 파일 업로드로 등록하고 교환 신청 글에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
