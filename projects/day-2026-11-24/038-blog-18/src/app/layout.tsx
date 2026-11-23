import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "부모님께 배우는 요리 블로그",
  description: "부모님께 배운 가정식 요리법을 기록하고, 요리 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
