import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "가을 제철 요리 레시피 공유",
  description: "가을 제철 재료로 만드는 요리를 소개하고, 회원가입과 로그인으로 나만의 가을 레시피를 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
