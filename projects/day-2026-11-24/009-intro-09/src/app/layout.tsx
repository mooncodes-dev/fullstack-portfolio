import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 사진 취미 포트폴리오 소개 페이지",
  description: "취미로 찍은 사진을 테마별로 소개하고, 회원가입과 로그인으로 나만의 사진첩을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
