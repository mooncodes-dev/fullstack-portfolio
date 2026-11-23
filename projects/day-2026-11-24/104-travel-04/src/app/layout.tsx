import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "자전거 여행 일지 사이트",
  description: "자전거로 달린 여행 코스를 기록하는 사이트이다. 코스 후기에 댓글을 달아 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
