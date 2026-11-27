import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재활 운동 가이드 페이지",
  description: "재활 운동 동작을 소개하고, 방문자가 동작에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
