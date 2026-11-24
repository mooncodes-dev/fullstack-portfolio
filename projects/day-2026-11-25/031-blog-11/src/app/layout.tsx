import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "반려묘 일상 블로그",
  description: "반려묘의 일상을 사진과 함께 기록하고, 회원가입과 로그인으로 고양이 글을 관리할 수 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
