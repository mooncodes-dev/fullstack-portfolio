import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신고와 관리자 블로그",
  description: "부적절한 글·댓글을 신고할 수 있게 하고, 관리자 계정은 신고 목록을 보고 글을 숨기거나 삭제할 수 있는 블로그를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
