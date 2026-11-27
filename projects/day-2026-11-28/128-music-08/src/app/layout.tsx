import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "EDM 페스티벌 기록 페이지",
  description: "다녀온 EDM 페스티벌의 라인업과 후기를 기록하고, 회원가입과 로그인으로 나만의 페스티벌 기록을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
