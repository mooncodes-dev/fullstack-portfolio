import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 좋아하는 계절 소개 페이지",
  description: "좋아하는 계절의 풍경과 활동을 소개하고, 방문자가 계절 사진에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
