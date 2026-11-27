import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "저녁 요가 스트레칭 기록 블로그",
  description: "저녁 요가와 스트레칭 루틴을 기록하고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
