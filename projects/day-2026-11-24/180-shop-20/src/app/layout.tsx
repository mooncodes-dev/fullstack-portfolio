import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 가게 통합 상점 플랫폼",
  description: "여러 동네 가게를 하나로 모아 쇼핑하는 플랫폼이다. 회원가입과 로그인을 하면 여러 가게의 상품을 검색하고, 상품 사진을 파일 업로드로 등록한 판매 글에 댓글을 달 수 있으며, 관리",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
