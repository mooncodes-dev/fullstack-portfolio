import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "노래 추천 게시판",
  description: "곡 제목, 가수, 추천 이유를 글로 올리는 게시판입니다. 추천 글은 DB에 저장되고 장르별로 필터링할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
