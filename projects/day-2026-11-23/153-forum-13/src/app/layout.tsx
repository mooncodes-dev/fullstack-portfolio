import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 활동 뱃지 포럼",
  description: "회원가입과 로그인을 하면 활동에 따라 뱃지를 받는 게시판 포럼이다. 뱃지를 많이 모은 회원에게 좋아요를 눌러 응원할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
