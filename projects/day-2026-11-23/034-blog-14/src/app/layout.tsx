import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프로젝트 회고 블로그",
  description: "진행한 프로젝트의 회고 글을 올리고, 프로젝트별로 글을 묶어볼 수 있다. 회원가입과 로그인으로 회고 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
