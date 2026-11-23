import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "프리랜서 포트폴리오",
  description: "받은 의뢰와 작업물을 소개하고, 방문자가 문의 글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
