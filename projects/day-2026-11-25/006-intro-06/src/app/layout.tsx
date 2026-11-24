import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 브런치 카페 탐방 소개 페이지",
  description: "다녀온 브런치 카페를 소개하고, 방문자가 카페 후기에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
