import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "온라인 상점 종합 플랫폼",
  description: "여러 판매자의 상품을 함께 팔고, 관리자가 상품을 검수하고 판매자를 관리할 수 있다. 회원가입과 로그인으로 판매자를 구분한다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
