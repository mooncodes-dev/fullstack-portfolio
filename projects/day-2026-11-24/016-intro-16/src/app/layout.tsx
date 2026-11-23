import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 장비와 추억 소개 페이지",
  description: "쓰는 캠핑 장비와 다녀온 캠핑 추억을 사진과 함께 소개하고, 장비 사진을 파일로 업로드할 수 있다. 방문자가 추억 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
