import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수제 캔들 온라인 상점",
  description: "수제 캔들을 파는 상점으로, 상품 이름으로 검색할 수 있다. 상품은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
