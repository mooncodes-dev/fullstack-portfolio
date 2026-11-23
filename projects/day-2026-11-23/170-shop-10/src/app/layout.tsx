import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "정기 구독 상점",
  description: "회원가입과 로그인을 하면 매달 상품을 정기적으로 받아보는 상점이다. 구독 상품을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
