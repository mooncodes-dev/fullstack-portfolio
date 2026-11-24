import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 손뜨개 작품 소개 페이지",
  description: "손으로 뜬 작품을 사진과 함께 소개하고, 작품 사진을 파일로 업로드할 수 있다. 방문자가 작품에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
