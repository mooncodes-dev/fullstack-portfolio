import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "동행 여행 일지 공유 사이트",
  description: "함께 여행한 동행자와 일지를 공유하는 사이트이다. 일지에 좋아요를 누르고 댓글을 달아 추억을 함께 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
