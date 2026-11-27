import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "악기 연습곡 추천 페이지",
  description: "악기별 연습곡을 추천하고, 곡 사진을 파일로 업로드할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
