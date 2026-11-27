import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "공부할 때 듣는 음악 페이지",
  description: "집중에 좋은 음악과 플레이리스트를 공유하고, 곡 제목으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
