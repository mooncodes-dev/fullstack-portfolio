import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "독서 감상 블로그",
  description: "읽은 책의 감상평을 기록하고, 책 제목으로 글을 찾을 수 있다. 방문자가 감상평에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
