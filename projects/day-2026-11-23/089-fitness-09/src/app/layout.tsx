import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자세 교정 운동 페이지",
  description: "자세별 교정 운동을 소개하고, 방문자가 운동에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
