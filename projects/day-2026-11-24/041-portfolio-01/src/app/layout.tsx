import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "게임 개발자 포트폴리오",
  description: "만든 게임과 개발 과정을 소개하고, 게임마다 플레이 영상을 함께 보여준다. 프로젝트는 추가·수정·삭제할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
