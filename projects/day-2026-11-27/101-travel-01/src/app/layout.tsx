import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 당일치기 여행 일지",
  description: "당일치기 여행 기록을 공유하고, 여행지 이름으로 검색할 수 있다. 일지는 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
