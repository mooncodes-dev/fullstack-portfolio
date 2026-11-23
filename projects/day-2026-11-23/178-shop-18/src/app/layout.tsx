import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상점 관리자 상품 등록 상점",
  description: "관리자가 상품을 등록하고 가격과 재고를 관리하는 상점이다. 회원가입과 로그인을 하면 상품을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
