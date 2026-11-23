import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "홈트 루틴 추천 페이지",
  description: "집에서 하는 운동 루틴을 추천하고, 방문자가 루틴에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
