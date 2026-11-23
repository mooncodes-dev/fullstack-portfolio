import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "강사 포트폴리오",
  description: "진행한 강의와 수강 후기를 소개하고, 방문자가 강의에 댓글을 남길 수 있다. 회원가입과 로그인으로 강의를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
