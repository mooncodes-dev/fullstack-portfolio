import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "별 보기 여행 일지",
  description: "별이 잘 보이는 여행지를 기록하고, 방문자가 일지에 좋아요와 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
