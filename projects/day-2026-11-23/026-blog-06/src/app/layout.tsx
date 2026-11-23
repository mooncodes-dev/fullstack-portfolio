import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 리뷰 블로그",
  description: "본 영화의 평점과 리뷰를 기록하고, 장르별로 글을 검색할 수 있다. 회원가입과 로그인으로 나만의 리뷰를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
