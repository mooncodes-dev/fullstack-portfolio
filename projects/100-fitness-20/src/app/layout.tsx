import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "우리 동네 운동 시설 리뷰 페이지",
  description: "헬스장, 공원 운동기구 같은 시설 정보를 등록하고 리뷰와 사진을 올리는 페이지입니다. 시설 정보와 리뷰는 DB에 저장되고 지역별 검색을 제공합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
