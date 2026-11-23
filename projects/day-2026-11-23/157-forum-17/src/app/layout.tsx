import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 이벤트 캘린더 포럼",
  description: "포럼에서 여는 이벤트 일정을 캘린더로 보여주는 게시판 포럼이다. 이벤트를 검색하고 참가 신청 글에 댓글을 달 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
