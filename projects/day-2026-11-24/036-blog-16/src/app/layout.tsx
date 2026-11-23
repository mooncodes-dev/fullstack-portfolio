import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "중고거래 꿀팁 블로그",
  description: "중고거래에서 겪은 경험과 꿀팁을 정리하고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
