import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "미식 여행 일지 사이트",
  description: "여행지에서 먹은 음식을 기록하는 사이트이다. 음식 사진을 파일 업로드로 첨부하고 이름을 검색해 맛집을 찾아볼 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
