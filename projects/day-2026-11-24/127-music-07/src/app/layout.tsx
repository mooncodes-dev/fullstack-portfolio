import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "재즈 명곡 소개 플랫폼",
  description: "시대를 빛낸 재즈 명곡을 소개하는 플랫폼이다. 명곡에 댓글을 달아 감상과 해설을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
