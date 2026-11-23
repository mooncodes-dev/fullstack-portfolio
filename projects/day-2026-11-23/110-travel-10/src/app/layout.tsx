import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행지 평점 리뷰 사이트",
  description: "다녀온 여행지에 평점과 후기를 남기는 사이트이다. 후기에 댓글을 달고 좋아요를 눌러 유용한 후기를 가려낼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
