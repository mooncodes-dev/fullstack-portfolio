import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "계절별 여행지 일지 사이트",
  description: "봄, 여름, 가을, 겨울 계절별로 여행지를 모아 보여주는 사이트이다. 여행지 이름을 검색하고 마음에 드는 일지에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
