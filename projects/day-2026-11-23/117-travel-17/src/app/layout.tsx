import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 기념품 쇼핑 기록 사이트",
  description: "여행지에서 산 기념품을 기록하고 공유하는 사이트이다. 기념품 사진을 파일 업로드로 첨부하고 이름을 검색해 비슷한 기념품을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
