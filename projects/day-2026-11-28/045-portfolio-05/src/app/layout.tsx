import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "오디오북 내레이터 포트폴리오",
  description: "녹음한 오디오북 샘플과 작품을 소개하고, 작품 제목으로 검색할 수 있다. 방문자가 샘플에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
