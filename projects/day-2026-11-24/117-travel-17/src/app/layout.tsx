import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "졸업 여행 일지 사이트",
  description: "졸업 기념으로 떠난 여행을 기록하는 사이트이다. 여행지 이름을 검색해 지난 졸업 여행 일지를 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
