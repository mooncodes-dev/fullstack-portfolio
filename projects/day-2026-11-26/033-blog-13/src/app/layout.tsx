import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "도시 농사 기록 블로그",
  description: "도시에서 텃밭을 가꾸는 과정을 기록하고, 방문자가 글에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
