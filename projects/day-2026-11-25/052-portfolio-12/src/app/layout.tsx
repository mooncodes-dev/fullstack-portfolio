import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "UX 리서처 케이스 스터디 포트폴리오",
  description: "진행한 UX 리서치를 소개하고, 방문자가 연구 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
