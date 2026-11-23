import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "드론 촬영가 포트폴리오",
  description: "드론으로 찍은 풍경 영상과 사진을 소개하고, 방문자가 영상에 댓글을 남길 수 있다. 회원가입과 로그인으로 작품을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
