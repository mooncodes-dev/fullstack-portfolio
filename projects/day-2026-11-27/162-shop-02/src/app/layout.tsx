import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "핸드메이드 모자 상점",
  description: "핸드메이드 모자를 파는 상점으로, 방문자가 상품에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
