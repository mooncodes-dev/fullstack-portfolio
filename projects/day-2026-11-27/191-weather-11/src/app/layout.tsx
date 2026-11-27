import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "벚꽃 개화 날씨 페이지",
  description: "벚꽃 개화 시기와 날씨를 제공하고, 지역 이름으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
