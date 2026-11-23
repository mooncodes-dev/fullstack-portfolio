import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "콘서트 일정 공유 플랫폼",
  description: "회원가입과 로그인을 하면 콘서트 일정을 등록하고 공유할 수 있는 플랫폼이다. 일정을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
