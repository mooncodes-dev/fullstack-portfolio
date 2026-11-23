import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "좋아하는 책과 명언을 나누는 소개 페이지",
  description: "읽은 책과 인상 깊은 문장을 카드로 소개하고, 방문자가 책을 검색할 수 있다. 책 목록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
