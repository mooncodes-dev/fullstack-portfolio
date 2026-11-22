import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댓글 알림 블로그",
  description: "내 글에 댓글이 달리면 알림 목록에 표시되는 블로그입니다. 알림은 DB에 저장되고, 읽으면 읽음 상태로 바뀌며, 안 읽은 알림 개수를 배지로 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
