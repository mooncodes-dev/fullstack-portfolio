import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 외국어 공부법 소개 페이지",
  description: "외국어를 공부하는 방법과 자료를 정리하고, 방문자가 공부법에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
