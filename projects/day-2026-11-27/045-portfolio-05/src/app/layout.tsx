import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "광고 음악 작곡가 포트폴리오",
  description: "광고용으로 만든 곡과 음원을 소개하고, 곡 제목으로 검색할 수 있다. 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
