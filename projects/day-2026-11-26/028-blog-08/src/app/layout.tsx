import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "손뜨개 소품 블로그",
  description: "손뜨개로 만든 소품을 기록하고, 사진을 파일로 업로드할 수 있다. 글은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
