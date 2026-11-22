import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "신고 처리 포럼",
  description: "글과 댓글을 신고하면 관리자가 신고 큐에서 확인하고 숨김 처리하는 포럼입니다. 신고 내역은 DB에 저장되고 처리 상태가 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
