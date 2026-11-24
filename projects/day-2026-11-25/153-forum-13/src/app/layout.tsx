import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "육아 정보 공유 포럼",
  description: "육아 정보를 나누고, 주제별로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
