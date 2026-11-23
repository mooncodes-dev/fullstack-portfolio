import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다중 포럼 통합 관리 플랫폼",
  description: "여러 주제의 포럼을 하나로 모아 관리하는 플랫폼이다. 회원가입과 로그인을 하면 포럼을 넘나들며 글을 쓰고, 자료 파일을 파일 업로드로 공유하고, 글을 검색하며, 댓글을 달 수 있고",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
