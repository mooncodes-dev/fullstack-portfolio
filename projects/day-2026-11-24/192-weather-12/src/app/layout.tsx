import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "야구장 날씨 안내 사이트",
  description: "야구 경기가 열리는 구장의 날씨를 알려주는 사이트이다. 경기 날씨 후기에 댓글을 달아 현지 소식을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
