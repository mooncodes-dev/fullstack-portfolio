import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 언어 공부 노트 소개 페이지",
  description: "언어를 공부하며 정리한 노트를 소개하고, 회원가입과 로그인으로 나만의 공부 노트를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
