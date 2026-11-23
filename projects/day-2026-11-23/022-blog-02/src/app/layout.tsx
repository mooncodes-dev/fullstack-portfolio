import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 일기 블로그",
  description: "다녀온 여행지의 이야기를 사진과 함께 기록하고, 지역별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
