import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "캠핑 장비 추천 포럼",
  description: "캠핑 장비를 추천하고 후기를 나누며, 장비 이름으로 글을 검색할 수 있다. 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
