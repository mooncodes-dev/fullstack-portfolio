import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 외국어 회화 소개 페이지",
  description: "외국어 회화 공부 방법과 표현을 소개하고, 표현으로 글을 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
