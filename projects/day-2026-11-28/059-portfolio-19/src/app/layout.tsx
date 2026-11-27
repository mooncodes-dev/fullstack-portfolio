import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "소설 작가 포트폴리오",
  description: "쓴 소설과 단편을 소개하고, 작품 제목으로 검색할 수 있다. 방문자가 작품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
