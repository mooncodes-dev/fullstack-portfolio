import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "상품 비교 상점",
  description: "회원가입과 로그인을 하면 여러 상품을 나란히 비교할 수 있는 상점이다. 비교 목록을 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
