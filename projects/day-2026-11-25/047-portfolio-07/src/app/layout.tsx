import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "패션 디자이너 컬렉션 포트폴리오",
  description: "디자인한 의상 컬렉션을 소개하고, 방문자가 컬렉션에 댓글을 남길 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
