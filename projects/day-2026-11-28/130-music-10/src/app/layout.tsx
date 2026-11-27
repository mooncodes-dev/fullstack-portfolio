import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "기타 코드 연습 페이지",
  description: "기타 코드와 운지법을 기록하고, 방문자가 코드에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
