import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "작곡 아이디어 메모 플랫폼",
  description: "떠오른 멜로디 아이디어를 메모로 남기는 플랫폼이다. 아이디어에 댓글과 좋아요를 달아 다른 작곡가와 의견을 나눌 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
