import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인물 사진작가 포트폴리오",
  description: "찍은 인물 사진을 테마별로 보여주고, 사진을 파일로 업로드할 수 있다. 방문자가 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
