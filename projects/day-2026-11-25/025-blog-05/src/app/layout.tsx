import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "한 달 살기 준비 블로그",
  description: "한 달 살기를 준비하며 알아본 정보를 정리하고, 회원가입과 로그인으로 나만의 준비 글을 관리할 수 있다. 방문자가 글에 좋아요를 누를 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
