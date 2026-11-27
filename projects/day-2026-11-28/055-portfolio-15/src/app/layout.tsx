import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "모션 그래픽 디자이너 포트폴리오",
  description: "만든 모션 그래픽 영상과 프로젝트를 소개하고, 작품 제목으로 검색할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
