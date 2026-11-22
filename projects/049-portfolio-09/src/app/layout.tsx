import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "블로그 겸 포트폴리오",
  description: "프로젝트 소개와 함께 개발 일지 글을 쓸 수 있는 포트폴리오를 만드세요. 프로젝트와 글 데이터를 각각 DB에 저장하고, 프로젝트 상세에서 관련 글을 연결해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
