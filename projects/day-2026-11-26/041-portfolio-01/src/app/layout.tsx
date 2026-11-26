import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "그래픽 디자이너 포트폴리오",
  description: "작업한 그래픽 디자인 프로젝트를 소개하고, 프로젝트 이름으로 검색할 수 있다. 프로젝트는 추가·수정·삭제가 가능하다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
