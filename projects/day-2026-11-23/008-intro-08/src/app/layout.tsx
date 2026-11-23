import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 꿈 지도 소개 페이지",
  description: "이루고 싶은 꿈을 보드 형태로 정리하고, 방문자가 꿈마다 응원 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
