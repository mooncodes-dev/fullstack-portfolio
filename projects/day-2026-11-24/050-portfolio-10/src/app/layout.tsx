import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "푸드 스타일리스트 포트폴리오",
  description: "연출한 음식 사진과 스타일링 사례를 소개하고, 방문자가 사진에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
