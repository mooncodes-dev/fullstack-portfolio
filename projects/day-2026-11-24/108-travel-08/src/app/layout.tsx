import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "야경 명소 여행 일지 사이트",
  description: "아름다운 야경 명소를 모아 소개하는 사이트이다. 명소 이름을 검색하고 마음에 드는 일지에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
