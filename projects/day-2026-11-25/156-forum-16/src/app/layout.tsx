import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "여행 경비 절약 포럼",
  description: "여행 경비를 아끼는 방법을 나누고, 회원가입과 로그인으로 절약 팁 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
