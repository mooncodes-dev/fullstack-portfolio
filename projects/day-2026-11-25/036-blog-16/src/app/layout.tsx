import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 등산 일기 블로그",
  description: "주말마다 오른 산의 풍경과 코스를 기록하고, 방문자가 등산 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
