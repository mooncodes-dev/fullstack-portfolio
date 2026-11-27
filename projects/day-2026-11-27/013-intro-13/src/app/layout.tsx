import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 패션 스타일 소개 페이지",
  description: "좋아하는 패션 스타일과 코디를 소개하고, 방문자가 코디 사진에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
