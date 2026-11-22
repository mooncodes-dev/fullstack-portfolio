import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "다도시 대시보드 사이트",
  description: "회사 지점이나 가족이 사는 도시 여러 곳의 날씨를 한 대시보드에 보여주는 사이트입니다. 도시 목록과 순서는 DB에 저장하고 드래그 순서 변경 흉내까지 넣어보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
