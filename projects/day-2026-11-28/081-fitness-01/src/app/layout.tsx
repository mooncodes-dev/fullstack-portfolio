import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "요가 자세 기록 페이지",
  description: "연습한 요가 자세와 효과를 기록하고, 자세 이름으로 검색할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
