import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "사찰 여행 일지",
  description: "다녀온 사찰과 템플스테이 경험을 기록하고, 방문자가 일지에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
