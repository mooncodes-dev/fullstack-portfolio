import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아요와 조회수 블로그",
  description: "글마다 조회수를 자동 증가시키고, 로그인 사용자가 좋아요를 누를 수 있게 하세요. 인기 글을 조회수·좋아요 순으로 정렬하는 페이지도 만듭니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
