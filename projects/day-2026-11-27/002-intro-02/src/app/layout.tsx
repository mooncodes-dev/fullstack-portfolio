import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 반려동물 소개 페이지",
  description: "키우는 반려동물의 성격과 일상을 소개하고, 방문자가 반려동물 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
