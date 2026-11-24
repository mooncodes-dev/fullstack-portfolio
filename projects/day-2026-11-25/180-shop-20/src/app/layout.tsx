import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "핸드메이드 마켓 플랫폼",
  description: "여러 작가의 핸드메이드 상품을 한곳에 모으고, 관리자가 상품을 검수하고 작가를 관리할 수 있다. 회원가입과 로그인으로 작가를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
