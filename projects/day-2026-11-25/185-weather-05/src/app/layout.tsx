import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "눈 오는 날 기록",
  description: "눈 오는 날의 풍경과 소식을 공유하고, 방문자가 기록에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
