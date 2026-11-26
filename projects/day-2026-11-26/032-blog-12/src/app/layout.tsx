import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려견 훈련 일기 블로그",
  description: "반려견 훈련 과정과 성과를 기록하고, 방문자가 훈련 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
