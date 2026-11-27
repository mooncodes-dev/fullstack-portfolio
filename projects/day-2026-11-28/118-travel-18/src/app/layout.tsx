import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "단풍 여행 페이지",
  description: "단풍이 아름다운 여행지와 시기를 기록하고, 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
