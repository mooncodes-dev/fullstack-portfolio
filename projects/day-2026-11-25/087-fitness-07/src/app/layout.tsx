import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "복싱 입문 가이드",
  description: "복싱 기본 동작과 훈련법을 소개하고, 방문자가 가이드에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
