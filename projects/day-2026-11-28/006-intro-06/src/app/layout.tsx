import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 여행 사진 소개 페이지",
  description: "다녀온 여행지의 사진을 소개하고, 여행지 이름으로 검색할 수 있다. 방문자가 사진에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
