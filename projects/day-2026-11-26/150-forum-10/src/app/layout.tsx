import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "새벽 산책 모임 포럼",
  description: "새벽 산책 모임의 인증과 후기를 나누고, 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
