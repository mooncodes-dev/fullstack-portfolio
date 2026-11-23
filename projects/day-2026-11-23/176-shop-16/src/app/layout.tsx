import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상점 공지 게시판 상점",
  description: "회원가입과 로그인을 하면 상점 공지를 확인하고 문의 글을 남길 수 있는 상점이다. 공지에 댓글을 달아 궁금한 점을 물어볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
