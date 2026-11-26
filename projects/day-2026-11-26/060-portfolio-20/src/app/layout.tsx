import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프리랜서 종합 포트폴리오 플랫폼",
  description: "여러 프리랜서의 작품을 한곳에 모으고, 관리자가 작품을 승인하고 직군을 관리할 수 있다. 회원가입과 로그인으로 프리랜서를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
