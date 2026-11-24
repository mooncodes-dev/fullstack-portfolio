import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "악기 중고 거래 포럼",
  description: "악기 중고 거래 후기와 질문을 나누고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
