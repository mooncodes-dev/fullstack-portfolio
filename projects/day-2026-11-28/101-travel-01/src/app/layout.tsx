import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "제주도 여행 기록 페이지",
  description: "제주도 여행 코스와 맛집을 기록하고, 장소 이름으로 검색할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
