import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "하루 한 문장 블로그",
  description: "하루를 담은 한 문장을 매일 기록하고, 방문자가 문장에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
