import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "방문자 피드백 포트폴리오",
  description: "포트폴리오를 본 사람들이 별점과 한줄 평가를 남기는 기능을 만드세요. 평가는 DB에 저장되고 평균 별점이 페이지에 표시됩니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
