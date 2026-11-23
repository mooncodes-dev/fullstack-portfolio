import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인테리어 디자이너 포트폴리오",
  description: "설계한 공간과 인테리어 사례를 소개하고, 사례를 분야별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
