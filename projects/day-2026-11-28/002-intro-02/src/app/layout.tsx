import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 주말 취미 소개 페이지",
  description: "주말마다 즐기는 취미를 소개하고, 취미 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
