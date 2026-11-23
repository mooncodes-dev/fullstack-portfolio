import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "중고 나눔 게시판 포럼",
  description: "쓰지 않는 물건을 나누는 게시판 포럼이다. 물건 이름을 검색하고 마음에 드는 나눔 글에 좋아요를 눌러 찜해 둘 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
