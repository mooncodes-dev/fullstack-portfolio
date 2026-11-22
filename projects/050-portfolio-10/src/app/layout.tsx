import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프로젝트 좋아요 랭킹 포트폴리오",
  description: "방문자가 프로젝트에 좋아요를 누를 수 있게 하고, 좋아요 순 랭킹 섹션을 만드세요. 좋아요는 사용자별로 한 번만 가능하게 DB로 막습니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
