import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "영상 번역가 포트폴리오",
  description: "번역한 영상 자막과 작품을 언어별로 보여주고, 방문자가 번역 사례에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
