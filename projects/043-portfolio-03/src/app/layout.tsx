import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프로젝트 상세와 회고 포트폴리오",
  description: "프로젝트마다 상세 페이지에서 만든 과정과 배운 점을 길게 보여주세요. 상세 글은 DB에 저장하고 조회수를 기록합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
