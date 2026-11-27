import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 홈카페 소개 페이지",
  description: "집에서 만드는 음료와 디저트를 소개하고, 음료 이름으로 검색할 수 있다. 방문자가 음료에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
