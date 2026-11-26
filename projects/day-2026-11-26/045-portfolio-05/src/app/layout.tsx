import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "백엔드 개발자 포트폴리오",
  description: "만든 API와 서버 프로젝트를 소개하고, 방문자가 프로젝트에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
