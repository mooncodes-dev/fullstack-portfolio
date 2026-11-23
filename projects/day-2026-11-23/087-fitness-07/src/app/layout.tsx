import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "등산 기록 페이지",
  description: "다녀온 산과 코스를 기록하고, 방문자가 코스에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
