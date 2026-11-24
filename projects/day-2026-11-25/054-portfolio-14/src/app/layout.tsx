import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "인디 게임 개발자 포트폴리오",
  description: "만든 게임과 스크린샷을 소개하고, 게임 이미지를 파일로 업로드할 수 있다. 방문자가 게임에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
