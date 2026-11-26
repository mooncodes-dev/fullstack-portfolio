import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "새벽 감성 음악 모음",
  description: "새벽에 듣기 좋은 잔잔한 음악을 소개하고, 곡 이름으로 검색할 수 있다. 곡은 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
