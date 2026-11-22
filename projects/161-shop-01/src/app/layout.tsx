import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기본 상품 목록 상점",
  description: "상품 이름, 가격, 사진을 보여주는 상점입니다. 상품 정보는 DB에 저장하고 관리자 로그인 후 상품을 등록·수정·삭제할 수 있습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
