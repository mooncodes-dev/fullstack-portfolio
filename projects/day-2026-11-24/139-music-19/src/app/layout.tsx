import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "LP 레코드 컬렉션 플랫폼",
  description: "모은 LP 레코드와 턴테이블을 소개하는 플랫폼이다. 레코드 사진을 파일 업로드로 올리고 소장품에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
