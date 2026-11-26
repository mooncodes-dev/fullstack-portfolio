import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "내가 다니는 도서관 소개 페이지",
  description: "자주 가는 도서관의 좌석과 분위기를 소개하고, 방문자가 도서관에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
