import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영상 편집자 쇼릴 포트폴리오",
  description: "편집한 영상을 모아 소개하고, 방문자가 영상에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
