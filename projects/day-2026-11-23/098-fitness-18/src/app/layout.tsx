import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "체력 측정 테스트 페이지",
  description: "체력 측정 항목과 결과를 기록하고, 방문자가 결과에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
