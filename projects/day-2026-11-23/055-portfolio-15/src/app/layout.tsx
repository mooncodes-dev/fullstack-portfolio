import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "플로리스트 포트폴리오",
  description: "만든 꽃다발과 행사 장식을 소개하고, 방문자가 작품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
