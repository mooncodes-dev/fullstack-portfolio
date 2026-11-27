import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인디 밴드 소개 페이지",
  description: "좋아하는 인디 밴드와 공연을 소개하고, 밴드 이름으로 검색할 수 있다. 소개는 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
