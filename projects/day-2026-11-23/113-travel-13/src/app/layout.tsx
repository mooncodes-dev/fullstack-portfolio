import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일지 주간 베스트 사이트",
  description: "한 주 동안 좋아요를 많이 받은 여행 일지를 모아 보여주는 사이트이다. 여행지 이름을 검색해 지난 베스트 일지도 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
