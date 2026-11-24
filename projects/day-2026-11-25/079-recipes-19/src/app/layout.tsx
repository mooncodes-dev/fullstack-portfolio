import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여름 별미 레시피 모음",
  description: "더운 여름에 먹는 별미를 소개하고, 방문자가 레시피에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
