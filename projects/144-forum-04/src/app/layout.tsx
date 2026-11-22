import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "댓글과 대댓글 포럼",
  description: "댓글에 다시 댓글을 달 수 있는 포럼입니다. 댓글의 부모 관계를 DB에 저장해 계층 구조로 보여주는 것이 핵심입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
