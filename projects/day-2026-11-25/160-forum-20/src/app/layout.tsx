import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "생활 정보 종합 포럼 플랫폼",
  description: "여러 주제의 생활 정보를 한곳에 모으고, 관리자가 게시판을 개설하고 글을 관리할 수 있다. 회원가입과 로그인으로 회원을 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
