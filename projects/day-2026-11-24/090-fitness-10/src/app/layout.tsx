import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "탁구 기록 페이지",
  description: "탁구 경기 결과와 랠리 연습을 기록하고, 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
