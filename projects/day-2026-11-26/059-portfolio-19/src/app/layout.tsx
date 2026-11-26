import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아트 테라피스트 포트폴리오",
  description: "진행한 아트 테라피 활동과 작품을 소개하고, 방문자가 사진에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
