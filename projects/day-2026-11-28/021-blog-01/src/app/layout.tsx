import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 퇴근 후 요리 블로그",
  description: "퇴근 후 만든 저녁 메뉴를 기록하고, 요리 이름으로 글을 검색할 수 있다. 방문자가 글에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
