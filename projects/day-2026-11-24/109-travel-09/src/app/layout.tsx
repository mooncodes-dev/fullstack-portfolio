import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "온천 여행 일지 사이트",
  description: "다녀온 온천의 효능과 후기를 기록하는 사이트이다. 후기에 댓글을 달아 온천 정보를 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
