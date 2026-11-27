import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 별자리 관측 소개 페이지",
  description: "관측한 별자리와 관측 장소를 소개하고, 별자리 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
