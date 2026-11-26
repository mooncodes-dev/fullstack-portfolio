import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "주말 시장 탐방 블로그",
  description: "주말마다 찾은 전통시장을 기록하고, 회원가입과 로그인으로 나만의 시장 글을 관리할 수 있다. 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
