import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 요리 도전 실패 블로그",
  description: "요리 도전의 실패담과 배운 점을 기록하고, 요리 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
