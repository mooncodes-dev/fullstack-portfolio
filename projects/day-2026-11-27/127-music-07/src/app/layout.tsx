import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영화 OST 추천 공유",
  description: "좋아하는 영화 OST를 공유하고, 영화 제목으로 곡을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
