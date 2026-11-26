import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주얼리 디자이너 포트폴리오",
  description: "디자인한 주얼리를 소개하고, 방문자가 작품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
