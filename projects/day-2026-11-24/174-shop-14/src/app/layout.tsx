import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "악기 상점",
  description: "기타와 건반 같은 악기를 소개하는 상점이다. 악기 사진을 파일 업로드로 첨부하고 상품 문의에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
