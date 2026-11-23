import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재고 알림 신청 상점",
  description: "회원가입과 로그인을 하면 품절 상품의 재입고 알림을 신청할 수 있는 상점이다. 상품을 검색해 알림을 신청하고 해제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
