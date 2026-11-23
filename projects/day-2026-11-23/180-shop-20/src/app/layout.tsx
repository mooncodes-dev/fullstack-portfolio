import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다중 상점 통합 마켓플레이스",
  description: "여러 상점을 하나로 모아 쇼핑하는 마켓플레이스이다. 회원가입과 로그인을 하면 여러 상점의 상품을 검색하고, 상품 사진을 파일 업로드로 등록한 판매 글에 댓글을 달 수 있으며, 관리",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
