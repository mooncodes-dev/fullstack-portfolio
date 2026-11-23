import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "운동할 때 듣는 음악 플랫폼",
  description: "운동할 때 힘이 나는 곡을 모아 공유하는 플랫폼이다. 마음에 드는 곡에 좋아요를 눌러 운동 플레이리스트를 만들 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
