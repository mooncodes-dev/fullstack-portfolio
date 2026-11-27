import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "아침 음악 추천 플랫폼",
  description: "아침에 듣기 좋은 곡을 추천하고, 곡 제목으로 검색할 수 있다. 곡은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
