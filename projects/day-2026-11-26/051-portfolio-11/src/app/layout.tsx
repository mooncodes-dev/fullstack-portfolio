import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "게임 디자이너 포트폴리오",
  description: "기획한 게임의 컨셉과 화면을 소개하고, 회원가입과 로그인으로 나만의 기획 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
