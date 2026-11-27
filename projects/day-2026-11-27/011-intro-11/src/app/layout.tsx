import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "나의 독서 공간 소개 페이지",
  description: "책을 읽는 공간과 분위기를 소개하고, 회원가입과 로그인으로 나만의 독서 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
