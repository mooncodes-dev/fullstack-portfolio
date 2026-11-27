import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 홈카페 기록 블로그",
  description: "집에서 만든 음료와 디저트를 기록하고, 음료 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
