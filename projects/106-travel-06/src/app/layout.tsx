import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 동행 구하기 사이트",
  description: "여행 날짜와 목적지를 적어 동행을 구하는 글을 올리고 댓글로 신청하는 사이트를 만드세요. 모집 마감 여부는 작성자가 바꿀 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
