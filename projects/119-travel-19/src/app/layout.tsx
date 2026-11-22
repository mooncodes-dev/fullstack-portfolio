import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 팁 게시판 사이트",
  description: "환전, 교통, 안전 같은 주제별 여행 팁을 올리고 댓글로 보완하는 게시판입니다. 팁 글은 DB에 저장되고 주제별 카테고리로 나눕니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
