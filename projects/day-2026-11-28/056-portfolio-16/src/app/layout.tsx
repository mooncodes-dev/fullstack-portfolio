import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "핸드드립 바리스타 포트폴리오",
  description: "만든 핸드드립 커피와 추출법을 소개하고, 사진을 파일로 업로드할 수 있다. 방문자가 작품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
