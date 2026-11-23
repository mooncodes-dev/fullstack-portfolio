import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 요리 실험 블로그",
  description: "주말마다 새로운 요리를 실험한 과정을 기록하고, 요리 이름으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
