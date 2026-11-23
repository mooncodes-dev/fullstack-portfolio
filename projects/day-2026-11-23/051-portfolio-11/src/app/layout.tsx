import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "학생 포트폴리오",
  description: "학교 과제와 동아리 활동을 정리하고, 방문자가 활동에 댓글을 남길 수 있다. 회원가입과 로그인으로 나만의 포트폴리오를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
