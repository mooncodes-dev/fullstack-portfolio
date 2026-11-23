import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "과학 커뮤니케이터 포트폴리오",
  description: "만든 과학 콘텐츠와 강연 영상을 정리하고, 콘텐츠를 주제로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
