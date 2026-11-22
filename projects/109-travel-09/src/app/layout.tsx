import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 준비물 체크리스트 사이트",
  description: "여행마다 준비물 목록을 만들고 챙긴 것을 체크하는 사이트입니다. 기본 준비물 템플릿을 DB에 두고 여행을 만들 때 복사해오는 방식을 구현하세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
