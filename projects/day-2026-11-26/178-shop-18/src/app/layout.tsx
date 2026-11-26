import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "정원 도구 상점",
  description: "정원 도구를 소개하고, 도구 이름으로 상품을 검색할 수 있다. 방문자가 상품에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
