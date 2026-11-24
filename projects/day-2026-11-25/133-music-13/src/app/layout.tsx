import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "클래식 입문곡 모음",
  description: "클래식 입문자에게 추천하는 곡을 소개하고, 작곡가 이름으로 곡을 검색할 수 있다. 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
