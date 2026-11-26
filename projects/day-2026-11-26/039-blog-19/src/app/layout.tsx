import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 산책 기록 블로그",
  description: "계절마다 걸은 산책길을 기록하고, 방문자가 산책 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
