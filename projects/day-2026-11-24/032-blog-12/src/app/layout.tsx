import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "수제 맥주 탐방 블로그",
  description: "마셔본 수제 맥주의 맛과 양조장을 기록하고, 방문자가 맥주 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
