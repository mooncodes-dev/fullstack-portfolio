import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스포츠 코치 포트폴리오",
  description: "지도한 선수와 훈련 프로그램을 소개하고, 방문자가 프로그램에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
