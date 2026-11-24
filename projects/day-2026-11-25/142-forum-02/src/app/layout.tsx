import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려식물 키우기 포럼",
  description: "반려식물을 키우며 생긴 질문과 답변을 나누고, 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
