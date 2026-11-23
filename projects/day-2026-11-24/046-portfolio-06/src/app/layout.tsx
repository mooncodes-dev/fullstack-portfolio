import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "네일 아티스트 포트폴리오",
  description: "시술한 네일 디자인을 소개하고, 방문자가 디자인에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
