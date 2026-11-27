import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 홈베이킹 소개 페이지",
  description: "만든 빵과 디저트를 소개하고, 방문자가 빵 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
