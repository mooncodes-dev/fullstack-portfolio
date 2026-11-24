import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "매일 만보 걷기 기록",
  description: "매일 걸은 걸음 수와 코스를 기록하고, 코스 이름으로 기록을 검색할 수 있다. 기록은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
