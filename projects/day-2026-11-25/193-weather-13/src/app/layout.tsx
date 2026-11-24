import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "바다 날씨 예보",
  description: "바다 날씨와 파도 예보를 소개하고, 지역으로 예보를 검색할 수 있다. 방문자가 예보에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
