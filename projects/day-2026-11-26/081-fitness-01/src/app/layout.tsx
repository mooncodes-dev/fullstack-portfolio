import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수영 입문 기록",
  description: "수영을 처음 배우는 과정을 기록하고, 영법 이름으로 기록을 검색할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
