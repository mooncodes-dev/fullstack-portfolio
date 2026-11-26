import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "헤어 디자이너 포트폴리오",
  description: "작업한 헤어스타일 사진을 소개하고, 스타일 이름으로 작품을 검색할 수 있다. 방문자가 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
