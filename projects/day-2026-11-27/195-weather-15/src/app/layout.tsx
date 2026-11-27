import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "태풍 정보 페이지",
  description: "태풍 경로와 영향 지역을 제공하고, 방문자가 날씨 기록에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
