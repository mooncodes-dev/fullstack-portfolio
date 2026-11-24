import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "셰프 레시피 공유 플랫폼",
  description: "여러 셰프의 레시피를 한곳에 모으고, 관리자가 레시피를 검수하고 카테고리를 관리할 수 있다. 회원가입과 로그인으로 셰프를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
