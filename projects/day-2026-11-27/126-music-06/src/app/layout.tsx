import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재즈 음악 추천 플랫폼",
  description: "좋아하는 재즈 곡을 추천하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
