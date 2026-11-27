import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "결혼식 축가 추천",
  description: "결혼식 축가로 좋은 곡을 추천하고, 방문자가 곡에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
