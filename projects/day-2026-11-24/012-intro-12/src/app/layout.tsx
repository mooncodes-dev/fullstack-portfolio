import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다녀온 전시회 기록 소개 페이지",
  description: "다녀온 전시회와 인상 깊은 작품을 정리하고, 방문자가 전시 후기에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
