import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "포럼 종합 플랫폼",
  description: "여러 주제의 포럼을 함께 운영하고, 관리자가 게시글을 검수하고 회원을 관리할 수 있다. 회원가입과 로그인으로 회원을 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
