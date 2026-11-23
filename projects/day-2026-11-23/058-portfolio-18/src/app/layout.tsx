import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "스튜디오 포트폴리오",
  description: "스튜디오의 작업물을 팀원별로 소개하고, 작업물을 분야별로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
