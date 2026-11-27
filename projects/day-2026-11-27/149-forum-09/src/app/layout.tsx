import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 계획 포럼",
  description: "여행 계획을 함께 짜는 포럼으로, 여행지 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
