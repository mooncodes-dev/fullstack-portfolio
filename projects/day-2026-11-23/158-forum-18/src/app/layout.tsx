import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 관리자 대시보드 포럼",
  description: "관리자가 신고와 공지를 한눈에 관리하는 게시판 포럼이다. 회원가입과 로그인을 한 뒤 글을 등록하면 관리자가 내용을 검수하고 공개 여부를 결정한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
