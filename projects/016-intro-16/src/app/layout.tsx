import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "음악 취향 소개 + 신청곡 페이지",
  description: "좋아하는 노래 목록을 소개하고, 방문자가 신청곡을 남기면 DB에 저장되는 페이지입니다. 신청곡에 좋아요를 누를 수 있고, 좋아요 순으로 정렬해 보여줍니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
