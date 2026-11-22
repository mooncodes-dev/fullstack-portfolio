import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "채용 공고 매칭 포트폴리오",
  description: "관심 있는 채용 공고 링크와 요구 기술을 DB에 저장해두고, 내 기술 스택과 얼마나 겹치는지 매칭 점수를 계산해 보여주는 포트폴리오를 만드세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
