import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동네 벼룩시장 통합 포럼",
  description: "동네의 나눔과 중고거래 글을 한곳에 모은 통합 포럼이다. 회원가입과 로그인을 하면 글을 쓰고, 물건 사진을 파일 업로드로 공유하고, 글을 검색하며, 댓글을 달 수 있고, 관리자가 ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
