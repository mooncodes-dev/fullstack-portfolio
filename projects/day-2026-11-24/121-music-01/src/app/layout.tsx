import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "드라이브 플레이리스트 플랫폼",
  description: "차 안에서 듣기 좋은 곡을 모아 공유하는 플랫폼이다. 플레이리스트를 등록하고 조회하고 수정하고 삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
